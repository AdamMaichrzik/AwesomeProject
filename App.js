import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  let score = 1;

  function get50percentChanceToSucess() {
    if (Math.random() < 0.5) {
      score = score * 2;
    } else {
      score = 1;
    }
    console.log(score);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.scoreBoardView}>
          <Text>Your score: {score}</Text>
        </View>
        <View style={styles.doubleItView}>
          <Button title="double it!" onPress={get50percentChanceToSucess}></Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 89,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  scoreBoardView: {
    flex: 1,
  },
  doubleItView: {
    flex: 3,
  },
});
