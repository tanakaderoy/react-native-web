import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onXpress: () => void;
  currentTime: string;
  percent: string;
}

const WorkoutTimer = observer(({ onXpress, currentTime, percent }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { width: percent }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onXpress} style={styles.xContainer}>
          <Text style={styles.textX}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default WorkoutTimer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#374BE6"
  },
  timeText: {
    color: "#fff",

    fontSize: 20
  },
  xContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#2C1A99"
  },
  textX: {
    fontSize: 25,
    margin: "auto",
    color: "#D3DCE0"
  },
  line: {
    height: 3,
    backgroundColor: "#E6E25E"
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    flex: 1
  }
});
