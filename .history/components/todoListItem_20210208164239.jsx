import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const TodoListItem = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
      <Text style={styles.text}>TodoList items will be shown here</Text>
    </View>
  );
};

export default TodoListItem;
