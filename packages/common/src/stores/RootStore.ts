import AsyncStorage from "@react-native-community/async-storage";
import { create } from "mobx-persist";
import { createContext } from "react";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
});

export class RootStore {
  constructor() {
    hydrate("workoutTimer", this.workoutTimerStore).then(() => {
      this.workoutTimerStore.isRunning
        ? this.workoutTimerStore.measure()
        : null;
    });

    hydrate("workout", this.workoutStore);
  }
  workoutStore = new WorkoutStore(this);
  workoutTimerStore = new WorkoutTimerStore(this);
}

export const RootStoreContext = createContext(new RootStore());
