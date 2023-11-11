import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1C1B1E", marginTop: 30 }}>
      <Header />

      <Main />
    </View>
  );
};

export default App;
