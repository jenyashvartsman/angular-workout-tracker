import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { WorkoutType } from '../../dtos/workout.dto';
import { WorkoutMetricConfig } from '../../config/workout-options.config';
import { WorkoutTypeSelectorComponent } from '../workout-type-selector/workout-type-selector';
import { WorkoutMetricSelectorComponent } from '../workout-metric-selector/workout-metric-selector';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.html',
  imports: [WorkoutTypeSelectorComponent, WorkoutMetricSelectorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutFormComponent {
  typeOptions = input.required<WorkoutType[]>();
  selectedType = input.required<WorkoutType>();
  metricOptions = input.required<number[]>();
  selectedMetric = input.required<number>();
  metricConfig = input.required<WorkoutMetricConfig>();

  typeChange = output<WorkoutType>();
  metricChange = output<number>();
  addWorkout = output<void>();
}
