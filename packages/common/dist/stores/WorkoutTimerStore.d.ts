import dayjs from "dayjs";
import { RootStore } from "./RootStore";
export declare class WorkoutTimerStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    startTime: dayjs.Dayjs;
    isRunning: boolean;
    seconds: number;
    startTimer(): void;
    measure(): void;
    stopTimer(): void;
    get display(): string;
    get percent(): string;
}
