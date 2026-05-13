import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-workout-metric-selector',
  templateUrl: './workout-metric-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutMetricSelectorComponent {
  options = input.required<number[]>();
  selected = input.required<number>();
  label = input.required<string>();
  unit = input.required<string>();
  metricChange = output<number>();
}
