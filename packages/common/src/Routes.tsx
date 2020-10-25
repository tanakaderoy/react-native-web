import React, { useContext } from "react";
import CurrentWorkout from "./modules/CurrentWorkout";
import WorkoutHistory from "./modules/WorkoutHistory";
import { Route, Router, Switch } from "./Router/index";
import { RootStoreContext } from "./stores/RootStore";

export const Routes = () => {
  const rootStore = useContext(RootStoreContext);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={RouteNames.workoutHistory}
          component={WorkoutHistory}
        />
        <Route
          exact
          path={RouteNames.currentWorkout}
          component={CurrentWorkout}
        />
        <Route exact path={RouteNames.workout} component={CurrentWorkout} />
      </Switch>
    </Router>
  );
};

export const RouteNames = {
  workoutHistory: "/",
  currentWorkout: "/current-workout",
  workout: "/workout/:year/:month/:day/:h/:m/:s"
};
