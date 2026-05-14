import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WorkoutWithCalories } from '../../config/calories.config';
import { WorkoutCardComponent } from '../workout-card/workout-card';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.html',
  imports: [WorkoutCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutListComponent {
  workouts = input.required<WorkoutWithCalories[]>();
  totalCalories = input.required<number>();
}
