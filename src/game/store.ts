import { create } from "zustand";
import type {
  GameState,
  GameEvent,
  GameInitParams,
  OptionEffects,
  ChoiceRecord,
  Achievement,
} from "./types";
import { roleConfigs } from "./config/roles";
import { companyConfigs } from "./config/companies";
import { defaultAchievements } from "./config/achievements";
import skillTree from "./config/skillTree";
import { selectRandomEvent } from "./mechanics/randomEvents";
import {
  calculateScoreResult,
  applyQuarterlyDecay,
  checkForReplacement,
  checkNewAchievements,
  matchEnding,
} from "./mechanics/scoring";
import { persist } from "zustand/middleware";

interface GameStore {
  // Game state
  gameState: GameState | null;
  currentEvent: GameEvent | null;
  unlockedAchievements: Achievement[];
  newUnlockedAchievements: string[];
  isLoading: boolean;

  // Game actions
  initGame: (params: GameInitParams) => void;
  restartGame: () => void;
  selectOption: (option: { text: string; effects: OptionEffects }) => void;
  unlockSkill: (skillId: string) => void;
  unlockAchievement: (id: string) => void;
  markAchievementsSeen: () => void;
  toggleSound: () => void;
  loadSavedGame: () => boolean;
}

const createInitialGameState = (params: GameInitParams): GameState => {
  const { roleKey, companyKey, difficulty } = params;
  const roleConfig = roleConfigs[roleKey];

  // Apply company modifiers
  const hiddenScores = { ...roleConfig.hiddenScores };
  if (companyKey) {
    const company = companyConfigs[companyKey];
    Object.entries(company.initialModifier).forEach(([key, value]) => {
      hiddenScores[key as keyof typeof hiddenScores] += value;
    });
  }

  const now = Date.now();

  return {
    roleKey,
    role: roleConfig.name,
    companyKey,
    company: companyKey ? companyConfigs[companyKey].name : undefined,
    rank: roleConfig.rank,
    salary:
      roleConfig.salary *
      (companyKey ? companyConfigs[companyKey].baseSalaryMultiplier : 1),
    techSkill: roleConfig.techSkill,
    socialSkill: roleConfig.socialSkill,
    innovationSkill: roleConfig.innovationSkill,
    hiddenScores,
    days: 1,
    quarter: 1,
    year: 1,
    skillPoints: roleConfig.skillPoints ?? 0,
    unlockedSkills: [],
    warnings: roleConfig.warnings,
    isGameOver: false,
    gameStartTime: now,
    lastSavedAt: now,
    achievements: [],
    choiceHistory: [],
    difficulty,
    soundEnabled: true,
  };
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      gameState: null,
      currentEvent: null,
      unlockedAchievements: JSON.parse(JSON.stringify(defaultAchievements)),
      newUnlockedAchievements: [],
      isLoading: true,

      initGame: (params: GameInitParams) => {
        const initialState = createInitialGameState(params);
        const event = selectRandomEvent(initialState);

        // Reset achievements
        const freshAchievements = JSON.parse(
          JSON.stringify(defaultAchievements),
        );

        // Check initial achievements (like 'ach-new' which is always unlocked)
        const newlyUnlocked = checkNewAchievements(
          initialState,
          freshAchievements,
        );
        newlyUnlocked.forEach((id) => {
          const ach = freshAchievements.find(
            (a: { id: string }) => a.id === id,
          );
          if (ach) ach.unlocked = true;
        });

        set({
          gameState: initialState,
          currentEvent: event,
          unlockedAchievements: freshAchievements,
          newUnlockedAchievements: newlyUnlocked,
          isLoading: false,
        });
      },

      restartGame: () => {
        const { gameState } = get();
        if (!gameState) return;

        const params: GameInitParams = {
          roleKey: gameState.roleKey,
          companyKey: gameState.companyKey,
          difficulty: gameState.difficulty,
        };

        get().initGame(params);
      },

      selectOption: (option) => {
        const { gameState, currentEvent, unlockedAchievements } = get();
        if (!gameState || !currentEvent) return;

        // Create new state with applied effects

        const newGameState: GameState = {
          ...gameState,
          techSkill: Math.max(
            0,
            gameState.techSkill + (option.effects.tech ?? 0),
          ),
          socialSkill: Math.max(
            0,
            gameState.socialSkill + (option.effects.social ?? 0),
          ),
          innovationSkill: Math.max(
            0,
            gameState.innovationSkill + (option.effects.innovation ?? 0),
          ),
          salary: gameState.salary + (option.effects.salary ?? 0),
          warnings: Math.max(
            0,
            gameState.warnings + (option.effects.warnings ?? 0),
          ),
          hiddenScores: {
            ...gameState.hiddenScores,
            techMatch: Math.max(
              0,
              gameState.hiddenScores.techMatch +
                (option.effects.techMatch ?? 0),
            ),
            teamContribution: Math.max(
              0,
              gameState.hiddenScores.teamContribution +
                (option.effects.teamContribution ?? 0),
            ),
            aiAdaptability: Math.max(
              0,
              gameState.hiddenScores.aiAdaptability +
                (option.effects.aiAdaptability ?? 0),
            ),
            marketValue: Math.max(
              0,
              gameState.hiddenScores.marketValue +
                (option.effects.marketValue ?? 0),
            ),
            health: Math.max(
              0,
              Math.min(
                100,
                gameState.hiddenScores.health + (option.effects.health ?? 0),
              ),
            ),
            family: Math.max(
              0,
              Math.min(
                100,
                gameState.hiddenScores.family + (option.effects.family ?? 0),
              ),
            ),
          },
          skillPoints:
            gameState.skillPoints + (option.effects.skillPoints ?? 0),
          rank: option.effects.rank ?? gameState.rank,
          days: gameState.days + 7,
          choiceHistory: [
            ...gameState.choiceHistory,
            {
              day: gameState.days + 1,
              eventId: currentEvent.id,
              eventTitle: currentEvent.title,
              choiceText: option.text,
              effects: option.effects,
              timestamp: Date.now(),
            },
          ],
          lastSavedAt: Date.now(),
        };

        // Check if it's end of quarter
        const isEndOfQuarter = newGameState.days % 90 === 0;

        if (isEndOfQuarter) {
          newGameState.quarter += 1;
          if (newGameState.quarter > 4) {
            newGameState.quarter = 1;
            newGameState.year += 1;
          }
          // Apply quarterly AI decay
          const decayedState = applyQuarterlyDecay(newGameState);
          Object.assign(newGameState, decayedState);
        }

        // Check for replacement (game over)
        const isReplaced = checkForReplacement(newGameState);
        if (isReplaced) {
          newGameState.isGameOver = true;
          const ending = matchEnding(newGameState);
          if (ending) {
            newGameState.ending = ending;
          }
        }

        // Check for new achievements
        const newUnlocked: string[] = [];
        const updatedAchievements = [...unlockedAchievements];

        updatedAchievements.forEach((ach) => {
          if (
            !ach.unlocked &&
            typeof ach.condition === "function" &&
            ach.condition(newGameState)
          ) {
            ach.unlocked = true;
            ach.unlockedAt = Date.now();
            newUnlocked.push(ach.id);
          }
        });

        set({
          gameState: newGameState,
          currentEvent: newGameState.isGameOver
            ? null
            : selectRandomEvent(newGameState),
          newUnlockedAchievements: newUnlocked,
          unlockedAchievements: updatedAchievements,
        });
      },

      unlockSkill: (skillId: string) => {
        const { gameState } = get();
        if (!gameState) return;

        if (gameState.skillPoints <= 0) return;

        if (gameState.unlockedSkills.includes(skillId)) return;

        const skill = skillTree.find((s: { id: string }) => s.id === skillId);
        if (!skill) return;

        // Apply skill effects
        const newGameState = { ...gameState };

        // Apply effects to base stats
        if (skill.effects.techSkill !== undefined) {
          newGameState.techSkill += skill.effects.techSkill;
        }
        if (skill.effects.socialSkill !== undefined) {
          newGameState.socialSkill += skill.effects.socialSkill;
        }
        if (skill.effects.innovationSkill !== undefined) {
          newGameState.innovationSkill += skill.effects.innovationSkill;
        }

        // Apply effects to hidden scores
        if (skill.effects.techMatch !== undefined) {
          newGameState.hiddenScores.techMatch += skill.effects.techMatch;
        }
        if (skill.effects.teamContribution !== undefined) {
          newGameState.hiddenScores.teamContribution +=
            skill.effects.teamContribution;
        }
        if (skill.effects.aiAdaptability !== undefined) {
          newGameState.hiddenScores.aiAdaptability +=
            skill.effects.aiAdaptability;
        }
        if (skill.effects.marketValue !== undefined) {
          newGameState.hiddenScores.marketValue += skill.effects.marketValue;
        }
        if (skill.effects.health !== undefined) {
          newGameState.hiddenScores.health += skill.effects.health;
        }
        if (skill.effects.family !== undefined) {
          newGameState.hiddenScores.family += skill.effects.family;
        }
        if (skill.effects.salary !== undefined) {
          newGameState.salary += skill.effects.salary;
        }

        newGameState.skillPoints =
          newGameState.skillPoints - skill.pointsRequired;
        newGameState.unlockedSkills = [...newGameState.unlockedSkills, skillId];

        set({
          gameState: newGameState,
        });
      },

      unlockAchievement: (id: string) => {
        const { unlockedAchievements, newUnlockedAchievements } = get();

        const updated = unlockedAchievements.map((ach) =>
          ach.id === id && !ach.unlocked
            ? { ...ach, unlocked: true, unlockedAt: Date.now() }
            : ach,
        );

        const newlyUnlocked = [...newUnlockedAchievements];
        if (!unlockedAchievements.find((ach) => ach.id === id)?.unlocked) {
          newlyUnlocked.push(id);
        }

        set({
          unlockedAchievements: updated,
          newUnlockedAchievements: newlyUnlocked,
        });
      },

      markAchievementsSeen: () => {
        set({ newUnlockedAchievements: [] });
      },

      toggleSound: () => {
        const { gameState } = get();
        if (!gameState) return;

        set({
          gameState: {
            ...gameState,
            soundEnabled: !gameState.soundEnabled,
          },
        });
      },

      loadSavedGame: () => {
        const stored = get();
        if (!stored.gameState) return false;
        return true;
      },
    }),
    {
      name: "ai-survival-game-storage",
      partialize: (state) => ({
        unlockedAchievements: state.unlockedAchievements,
      }),
    },
  ),
);

export default useGameStore;
