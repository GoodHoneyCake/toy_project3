import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

class Main extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hello World</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
