import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";

interface WorkoutCardProps {
  excercise: string;
  repsAndWeight: string;
  sets: Array<string>;
  onSetPress: (index: number) => void;
}

const WorkoutCard: React.FunctionComponent<WorkoutCardProps> = observer(
  ({ excercise, sets, repsAndWeight, onSetPress }) => {
    return (
      <View style={styles.cardContainer}>
        <Card>
          <View style={styles.topRow}>
            <Text style={styles.topRowText}>{excercise}</Text>
            <Text style={styles.topRowText}>{repsAndWeight}</Text>
          </View>
          <View style={styles.bottomRow}>
            {sets.map((set, index) => {
              if (set === "x") {
                return (
                  <View
                    style={[styles.circle, styles.fadedBackground]}
                    key={set + index}
                  >
                    <Text style={[styles.grayText, styles.circleText]}>X</Text>
                  </View>
                );
              }
              if (set === "") {
                return (
                  <TouchableOpacity
                    onPress={() => onSetPress(index)}
                    style={[styles.circle, styles.fadedBackground]}
                    key={set + index}
                  />
                );
              }
              return (
                <TouchableOpacity
                  onPress={() => onSetPress(index)}
                  style={styles.circle}
                  key={set + index}
                >
                  <Text style={[styles.circleText, styles.whiteText]}>
                    {set}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Card>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },

  circle: {
    borderRadius: 25,
    backgroundColor: "#3893EB",
    height: 50,
    width: 50
  },
  circleText: {
    fontSize: 16,
    margin: "auto"
  },
  whiteText: {
    color: "#fff"
  },
  fadedBackground: {
    backgroundColor: "#828F9E"
  },
  grayText: {
    color: "#E4E7EB"
  }
});

export default WorkoutCard;
