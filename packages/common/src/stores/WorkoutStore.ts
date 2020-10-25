import { computed, observable } from "mobx";
import { persist } from "mobx-persist";
import { RootStore } from "./RootStore";

type WorkoutDay = "a" | "b";

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @persist @observable currentSquat: number = 45;
  @persist @observable currentBenchPress: number = 45;
  @persist @observable currentoverheadPress: number = 45;
  @persist @observable currentDeadlift: number = 65;
  @persist @observable currentBarbellRow: number = 65;
  @persist("list") @observable currentExercises: Array<CurrentExercise> = [];
  @persist @observable lastWorkOutType: WorkoutDay = "a";

  @persist("object") @observable history: WorkoutHistory = {};

  @computed get hasCurrentWorkout(): boolean {
    return !!this.currentExercises.length;
  }
}

export interface CurrentExercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: Exercise;
  sets: Array<string>;
}

interface WorkoutHistory {
  [key: string]: Array<CurrentExercise>;
}
export type Exercise =
  | "Squat"
  | "BenchPress"
  | "OverHeadPress"
  | "DeadLift"
  | "BarbellRow";
