import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { workoutStore } from './store/workout.store';
import { WorkoutType } from './dtos/workout.dto';
import { WORKOUT_METRIC_CONFIG } from './config/workout-options.config';
import { WorkoutFormComponent } from './components/workout-form/workout-form';
import { WorkoutListComponent } from './components/workout-list/workout-list';

@Component({
  selector: 'app-root',
  imports: [WorkoutFormComponent, WorkoutListComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly store = inject(workoutStore);
  protected readonly metricConfig = computed(() => WORKOUT_METRIC_CONFIG[this.store.selectedType()]);

  onTypeChange(type: WorkoutType): void {
    this.store.selectType(type);
  }

  onMetricChange(metric: number): void {
    this.store.selectMetric(metric);
  }

  onClearWorkouts(): void {
    this.store.clearWorkouts();
  }

  onAddWorkout(): void {
    const type = this.store.selectedType();
    const metric = this.store.selectedMetric();
    const config = WORKOUT_METRIC_CONFIG[type];
    this.store.addWorkout({ type, [config.field]: metric });
  }
}
