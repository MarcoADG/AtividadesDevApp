import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CALCULADORA IMC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39373D",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    maxHeight: 120,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  texto: {
    color: "#FF4B4B",
    fontSize: 28,
    fontWeight: "700",
  },
});
