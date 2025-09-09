import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TimerScreen() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Screen mounted — timer started!");

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000); // update every second

    // Cleanup when screen unmounts
    return () => {
      clearInterval(interval);  
      console.log("Screen unmounted — timer stopped!");
    };
  }, []); // runs only once when screen loads

  return (
    <View style={styles.container}>
      <Text style={styles.text}>⏱ Timer: {seconds} seconds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101418",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 24, color: "#fff" },
});
