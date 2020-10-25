import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RouteNames } from "../Routes";
import { RootStoreContext } from "../stores/RootStore";
import { CurrentExercise } from "../stores/WorkoutStore";
import FAB from "../ui/FAB";
import HistoryCard from "../ui/HistoryCard";
import { uuidv4 } from "../utils/utils";

interface WorkoutHistoryProps extends RouteComponentProps {}

const WorkoutHistory: React.FC<WorkoutHistoryProps> = observer(
  ({ history }) => {
    const { workoutStore } = useContext(RootStoreContext);
    const rows: Array<Array<{
      date: string;
      exercises: CurrentExercise[];
    }>> = [];
    Object.entries(workoutStore.history).forEach(([date, exercises], i) => {
      // const hc = <HistoryCard currentExercise={v} header={dt} key={dt} />;
      if (i % 3 === 0) {
        rows.push([{ date, exercises }]);
      } else {
        rows[rows.length - 1].push({ date, exercises });
      }
    });

    const func = () => {
      if (!workoutStore.hasCurrentWorkout) {
        const emptySets = new Array(5).fill("");

        const {
          currentBarbellRow,
          currentBenchPress,
          currentDeadlift,
          currentExercises,
          currentSquat,
          currentoverheadPress
        } = workoutStore;
        if (workoutStore.lastWorkOutType === "b") {
          workoutStore.currentExercises.push(
            {
              exercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: [...emptySets],
              weight: currentSquat
            },
            {
              exercise: "BenchPress",
              numSets: 5,
              reps: 5,
              sets: [...emptySets],
              weight: currentBenchPress
            },
            {
              exercise: "DeadLift",
              numSets: 1,
              reps: 5,
              sets: ["", "x", "x", "x", "x"],
              weight: currentDeadlift
            }
          );
          workoutStore.currentSquat += 5;
          workoutStore.currentBenchPress += 5;
          workoutStore.currentDeadlift += 5;
        } else {
          workoutStore.currentExercises.push(
            {
              exercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: [...emptySets],
              weight: currentSquat
            },
            {
              exercise: "OverHeadPress",
              numSets: 5,
              reps: 5,
              sets: [...emptySets],
              weight: currentoverheadPress
            },
            {
              exercise: "BarbellRow",
              numSets: 1,
              reps: 5,
              sets: [...emptySets],
              weight: currentBarbellRow
            }
          );
          workoutStore.currentSquat += 5;
          workoutStore.currentoverheadPress += 5;
          workoutStore.currentBarbellRow += 5;
        }

        workoutStore.lastWorkOutType =
          workoutStore.lastWorkOutType === "a" ? "b" : "a";
      }

      history.push(RouteNames.currentWorkout);
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={rows}
          keyExtractor={item => item.reduce((pv, cv) => pv + " " + cv.date, "")}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                {item.map(({ date, exercises }) => (
                  <HistoryCard
                    onPress={() => {
                      const normDate = dayjs(date).format("YYYY-MM-DD-h-mm-ss");
                      const parts = normDate.split("-");
                      history.push(
                        `/workout/${parts[0]}/${parts[1]}/${parts[2]}/${parts[3]}/${parts[4]}/${parts[5]}`
                      );
                    }}
                    currentExercise={exercises}
                    header={date}
                    key={date + uuidv4()}
                  />
                ))}
                {item.length < 3 ? (
                  <View style={{ flex: 1, padding: 10 }} />
                ) : null}
                {item.length < 2 ? (
                  <View style={{ flex: 1, padding: 10 }} />
                ) : null}
              </View>
            );
          }}
        />
        <FAB onPress={func} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  container: {
    flex: 1
  }
});

export default WorkoutHistory;
