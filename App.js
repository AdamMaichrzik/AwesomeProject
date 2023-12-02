import { StatusBar } from "expo-status-bar";
import useState from 'react';
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  function sucessWith50PercentChance() {}

  function mainFunctionForTheGame() {}

  return (
    <>
      <View style={styles.container}>
        <View style={styles.scoreBoardView}>
          <Text>Your score: </Text>
        </View>
        <View style={styles.doubleItView}>
          <Button title="double it!" onPress={mainFunctionForTheGame}></Button>
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
