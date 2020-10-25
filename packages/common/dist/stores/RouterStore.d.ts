import { RootStore } from "./RootStore";
export declare class RouterStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    screen: Routes;
}
declare type Routes = "WorkoutHistory" | "CurrentWorkout";
export {};
