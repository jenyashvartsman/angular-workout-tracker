import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { WorkoutType } from '../../dtos/workout.dto';

@Component({
  selector: 'app-workout-type-selector',
  templateUrl: './workout-type-selector.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutTypeSelectorComponent {
  options = input.required<WorkoutType[]>();
  selected = input.required<WorkoutType>();
  typeChange = output<WorkoutType>();
}
