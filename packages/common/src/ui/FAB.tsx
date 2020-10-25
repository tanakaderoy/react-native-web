import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
}

const FAB = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default FAB;

const styles = StyleSheet.create({
  text: { fontSize: 18, marginLeft: 2, marginBottom: 2 },
  fab: {
    width: 40,
    height: 40,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    position: "absolute",
    bottom: 20,
    right: 20
  }
});
