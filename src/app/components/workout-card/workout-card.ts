import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { WorkoutDto, WorkoutType } from '../../dtos/workout.dto';

const TYPE_ICONS: Record<WorkoutType, string> = {
  [WorkoutType.Running]: '🏃',
  [WorkoutType.Cycling]: '🚴',
  [WorkoutType.Swimming]: '🏊',
  [WorkoutType.Weightlifting]: '🏋️',
  [WorkoutType.Yoga]: '🧘',
  [WorkoutType.Pilates]: '🤸',
  [WorkoutType.CrossFit]: '💪',
  [WorkoutType.Other]: '⚡',
};

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutCardComponent {
  workout = input.required<WorkoutDto>();
  calories = input.required<number>();

  protected readonly icon = computed(() => TYPE_ICONS[this.workout().type]);

  protected readonly metricDisplay = computed(() => {
    const w = this.workout();
    if (w.distance != null) return `${w.distance} km`;
    if (w.duration != null) return `${w.duration} min`;
    if (w.weight != null) return `${w.weight} kg`;
    if (w.reps != null) return `${w.reps} reps`;
    return '—';
  });
}
