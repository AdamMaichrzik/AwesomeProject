import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Alert, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [value, setValue] = useState(1);

  const get50percentChanceToSucess = () => {
    if (Math.random() < 0.5) {
      setValue(value * 2);
    } else {
      setValue(1);
    }
    console.log(value);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.scoreBoardView}>
          <Text style={styles.scoreText}>Your score: {value}</Text>
        </View>
        <View style={styles.doubleItView}>
          <Pressable style={styles.button} onPress={get50percentChanceToSucess}>
            <Text style={styles.buttonText}>Double it!</Text>
          </Pressable>
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
  scoreText: {
    fontSize: 34,
  },
  scoreBoardView: {
    flex: 1,
  },
  doubleItView: {
    flex: 3,
  },
  button: {
    height: 233,
    width: 233,
    borderRadius: 233,
    backgroundColor: "#4e02e4",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: 800,
  },
});
