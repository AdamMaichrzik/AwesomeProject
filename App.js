import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Alert, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as Haptics from 'expo-haptics';

export default function App() {
  const [score, setScore] = useState(1);
  const [highScore, setHighScore] = useState(1);

  const mainGameFunction = () => {
    if (Math.random() < 0.5) {
      setScore(score * 2);
    } else {
      setScore(1);
    } 
    if(score > highScore){
      setHighScore(score);
    } else {
      setHighScore(highScore); 
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    console.log(score);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.scoreBoardView}>
          <Text style={styles.scoreText}>Your score: {score}</Text>
          <Text style={styles.highScoreText}>High score: {highScore}</Text>
        </View>
        <View style={styles.doubleItView}>
          <Pressable style={styles.button} onPress={mainGameFunction}>
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
    fontSize: 34,
  },
});
