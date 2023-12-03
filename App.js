import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Alert, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as Haptics from 'expo-haptics';

export default function App() {
  const [score, setScore] = useState(1);
  const [highScore, setHighScore] = useState(1);
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [buttonBgColor, setButtonBgColor] = useState("#4e02e4");

  const mainGameFunction = () => {
    if (Math.random() < 0.5) {
      setScore(score * 2);
      setButtonBgColor("green");
    } else {
      setScore(1);
      setButtonBgColor("red");
    } 
    if(score > highScore){
      setHighScore(score);
    } else {
      setHighScore(highScore); 
    }
    setNumberOfClicks(numberOfClicks+1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    console.log(score);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.scoreBoardView}>
          <Text style={styles.scoreText}>Your score: {score}</Text>
          <Text style={styles.highScoreText}>High score: {highScore}</Text>
          <Text>Number of tries: {numberOfClicks}</Text>
        </View>
        <View style={styles.doubleItView}>
          <Pressable style={[styles.button,  { backgroundColor: buttonBgColor }]} onPress={mainGameFunction}>
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
