export enum WorkoutType {
  Running = 'Running',
  Cycling = 'Cycling',
  Swimming = 'Swimming',
  Weightlifting = 'Weightlifting',
  Yoga = 'Yoga',
  Pilates = 'Pilates',
  CrossFit = 'CrossFit',
  Other = 'Other',
}

export interface WorkoutDto {
  type: WorkoutType;
  duration?: number; // in minutes
  distance?: number; // in kilometers
  weight?: number; // in kilograms
  reps?: number;
}
