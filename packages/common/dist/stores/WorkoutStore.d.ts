import { RootStore } from "./RootStore";
declare type WorkoutDay = "a" | "b";
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquat: number;
    currentBenchPress: number;
    currentoverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;
    currentExercises: Array<CurrentExercise>;
    lastWorkOutType: WorkoutDay;
    history: WorkoutHistory;
    get hasCurrentWorkout(): boolean;
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
export declare type Exercise = "Squat" | "BenchPress" | "OverHeadPress" | "DeadLift" | "BarbellRow";
export {};
