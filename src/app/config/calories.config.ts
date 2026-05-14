import { WorkoutDto, WorkoutType } from '../dtos/workout.dto';

export type WorkoutWithCalories = WorkoutDto & { calories: number };

/**
 * Estimated calories burned per unit for each workout type.
 * Based on MET values for a ~70 kg person.
 *
 * Distance-based (cal/km):  Running, Cycling, Swimming
 * Weight-based  (cal/kg):   Weightlifting
 * Time-based    (cal/min):  Yoga, Pilates, CrossFit, Other
 */
const CALORIES_PER_UNIT: Record<WorkoutType, number> = {
  [WorkoutType.Running]: 65,
  [WorkoutType.Cycling]: 30,
  [WorkoutType.Swimming]: 120,
  [WorkoutType.Weightlifting]: 6,
  [WorkoutType.Yoga]: 3,
  [WorkoutType.Pilates]: 4,
  [WorkoutType.CrossFit]: 12,
  [WorkoutType.Other]: 5,
};

export function calculateCalories(workout: WorkoutDto): number {
  const rate = CALORIES_PER_UNIT[workout.type];
  const value = workout.distance ?? workout.duration ?? workout.weight ?? workout.reps ?? 0;
  return Math.round(value * rate);
}
