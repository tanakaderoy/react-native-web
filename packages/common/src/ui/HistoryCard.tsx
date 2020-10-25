import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CurrentExercise, Exercise } from "../stores/WorkoutStore";
import { uuidv4 } from "../utils/utils";
import Card from "./Card";

interface Props {
  header: string;
  currentExercise: Array<CurrentExercise>;
  onPress: () => void;
}

const exerciseShortHand = (ex: Exercise): string => {
  switch (ex) {
    case "BarbellRow":
      return "ROW";
    case "BenchPress":
      return "BP";
    case "DeadLift":
      return "DL";
    case "OverHeadPress":
      return "OHP";
    case "Squat":
      return "SQ";
    default:
      return "ERROR";
  }
};

const HistoryCard = ({ header, currentExercise, onPress }: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Card onPress={onPress}>
        <Text>{header}</Text>
        {currentExercise.map(ce => {
          return (
            <Text key={ce.exercise + uuidv4()}>{`${exerciseShortHand(
              ce.exercise
            )} ${ce.numSets} x ${ce.reps} ${ce.weight}`}</Text>
          );
        })}
      </Card>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 10
  }
});
