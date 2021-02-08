import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const TodoInsert = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={"#999"}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={"ADD"} />
      </View>
    </View>
  );
};

export default TodoInsert;
