/// <reference types="react" />
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";
export declare class RootStore {
    constructor();
    workoutStore: WorkoutStore;
    workoutTimerStore: WorkoutTimerStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
