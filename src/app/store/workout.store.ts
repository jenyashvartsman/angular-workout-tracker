import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withLinkedState,
  withMethods,
  withState,
} from '@ngrx/signals';
import { WorkoutDto, WorkoutType } from '../dtos/workout.dto';
import { WORKOUT_OPTIONS } from '../config/workout-options.config';
import { computed, effect } from '@angular/core';

const STORAGE_KEY = 'workouts';

interface WorkoutState {
  workouts: WorkoutDto[];
  typeOptions: WorkoutType[];
}

const initialState: WorkoutState = {
  workouts: [],
  typeOptions: Object.values(WorkoutType),
};

export const workoutStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withLinkedState(({ typeOptions }) => ({
    selectedType: () => typeOptions()[0],
  })),
  withComputed(({ selectedType }) => ({
    metricOptions: computed(() => WORKOUT_OPTIONS[selectedType()]),
  })),
  withLinkedState(({ selectedType }) => ({
    selectedMetric: () => WORKOUT_OPTIONS[selectedType()][0],
  })),
  withMethods((store) => ({
    addWorkout: (workout: WorkoutDto) => {
      const currentWorkouts = store.workouts();
      patchState(store, { workouts: [...currentWorkouts, workout] });

      //
      patchState(store, {
        selectedType: store.typeOptions()[0],
        selectedMetric: WORKOUT_OPTIONS[store.typeOptions()[0]][0],
      });
    },
    selectType: (type: WorkoutType) => {
      patchState(store, { selectedType: type });
    },
    selectMetric: (metric: number) => {
      patchState(store, { selectedMetric: metric });
    },
  })),
  withHooks((store) => ({
    onInit() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        patchState(store, { workouts: JSON.parse(saved) as WorkoutDto[] });
      }

      effect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store.workouts()));
      });
    },
  })),
);
