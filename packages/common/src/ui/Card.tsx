import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface CardProps {
  onPress?: () => void;
}

const Card: React.FunctionComponent<CardProps> = ({ children, onPress }) => {
  return onPress ? (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={styles.card}>{children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    padding: 10
  }
});
