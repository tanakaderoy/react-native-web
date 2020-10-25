import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { RouteComponentProps } from "react-router-dom";
import { RootStoreContext } from "../stores/RootStore";
import CurrentWorkoutCard from "../ui/WorkoutCard";
import WorkoutTimer from "../ui/WorkoutTimer";
import { uuidv4 } from "../utils/utils";

interface CurrentWorkoutProps
  extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
    h?: string;
    m?: string;
    s?: string;
  }> {}

const CurrentWorkout: React.FC<CurrentWorkoutProps> = observer(
  ({
    history,
    match: {
      params: { year, day, month, h, m, s }
    }
  }) => {
    const isCurrentWorkout = !year && !month && !day;
    const dateKey = `${year}-${month}-${day} ${h}:${m}:${s}`;
    const { workoutStore, workoutTimerStore } = useContext(RootStoreContext);
    console.log(dateKey);

    useEffect(() => {
      return () => {
        workoutTimerStore.stopTimer();
      };
    }, []);

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollContainer}
        >
          {(isCurrentWorkout
            ? workoutStore.currentExercises
            : workoutStore.history[dateKey]
          ).map(it => {
            return (
              <CurrentWorkoutCard
                onSetPress={setIndex => {
                  workoutTimerStore.startTimer();
                  const v = it.sets[setIndex];
                  let newValue: string;
                  if (v === "") {
                    newValue = `${it.reps}`;
                  } else if (v === "0") {
                    workoutTimerStore.stopTimer();
                    newValue = "";
                  } else {
                    newValue = `${parseInt(v) - 1}`;
                  }
                  it.sets[setIndex] = newValue;
                }}
                key={it.exercise + it.reps + it.weight + it.sets + uuidv4()}
                excercise={it.exercise}
                repsAndWeight={`${it.reps}x${it.numSets} ${it.weight}`}
                sets={it.sets}
              />
            );
          })}
          <Button
            title="SAVE"
            onPress={() => {
              if (isCurrentWorkout) {
                workoutStore.history[dayjs().format("YYYY-MM-DD h:mm:ss")] =
                  workoutStore.currentExercises;
                workoutStore.currentExercises = [];
              }
              history.push("/");
            }}
          />
        </ScrollView>

        {workoutTimerStore.isRunning ? (
          <WorkoutTimer
            percent={workoutTimerStore.percent}
            currentTime={workoutTimerStore.display}
            onXpress={() => workoutTimerStore.stopTimer()}
          />
        ) : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  scrollContainer: {
    padding: 10,
    marginBottom: 50
  }
});

export default CurrentWorkout;
