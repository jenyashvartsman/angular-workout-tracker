import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WorkoutDto } from '../../dtos/workout.dto';
import { WorkoutCardComponent } from '../workout-card/workout-card';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.html',
  imports: [WorkoutCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent {
  workouts = input.required<WorkoutDto[]>();
}
