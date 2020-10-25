import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Routes } from "./Routes";
import { CounterStoreContext } from "./stores/CounterStore";

interface Props {}

export const App = () => {
  const counterStore = useContext(CounterStoreContext);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Routes />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F5FCFF"
  }
});
