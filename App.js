import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.scoreBoardView}>
          <Text>Your score: </Text>
        </View>
        <View style={styles.doubleItView}>
          <Text>Double it or lose it?</Text>
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
  },
  scoreBoardView: {
    flex: 1,
  },
  doubleItView: {
    flex: 3,
  },
});
