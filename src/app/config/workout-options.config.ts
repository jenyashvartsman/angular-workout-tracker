import { WorkoutType } from '../dtos/workout.dto';

export const WORKOUT_OPTIONS: Record<WorkoutType, number[]> = {
  [WorkoutType.Running]: [1, 2, 3, 4, 5, 10, 15, 20, 25, 30],
  [WorkoutType.Cycling]: [5, 10, 15, 20, 25, 30, 50, 75, 100],
  [WorkoutType.Swimming]: [0.5, 1, 1.5, 2, 2.5, 3, 4, 5],
  [WorkoutType.Weightlifting]: [5, 10, 15, 20, 25, 30, 40, 50, 60],
  [WorkoutType.Yoga]: [15, 30, 45, 60, 90],
  [WorkoutType.Pilates]: [15, 30, 45, 60, 90],
  [WorkoutType.CrossFit]: [10, 20, 30, 40, 50, 60],
  [WorkoutType.Other]: [10, 20, 30, 40, 50, 60],
};

export const WORKOUT_REPS_OPTIONS = [1, 2, 3, 4, 5, 6];

export type WorkoutMetricField = 'duration' | 'distance' | 'weight';

export interface WorkoutMetricConfig {
  field: WorkoutMetricField;
  unit: string;
  label: string;
}

export const WORKOUT_METRIC_CONFIG: Record<WorkoutType, WorkoutMetricConfig> = {
  [WorkoutType.Running]: { field: 'distance', unit: 'km', label: 'Distance' },
  [WorkoutType.Cycling]: { field: 'distance', unit: 'km', label: 'Distance' },
  [WorkoutType.Swimming]: { field: 'distance', unit: 'km', label: 'Distance' },
  [WorkoutType.Weightlifting]: { field: 'weight', unit: 'kg', label: 'Weight' },
  [WorkoutType.Yoga]: { field: 'duration', unit: 'min', label: 'Duration' },
  [WorkoutType.Pilates]: { field: 'duration', unit: 'min', label: 'Duration' },
  [WorkoutType.CrossFit]: { field: 'duration', unit: 'min', label: 'Duration' },
  [WorkoutType.Other]: { field: 'duration', unit: 'min', label: 'Duration' },
};
