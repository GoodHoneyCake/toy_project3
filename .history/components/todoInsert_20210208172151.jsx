import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@save_todos";

const TodoInsert = ({ onAddTodo, onSave }) => {
  const [newTodoItem, setNewTodoItem] = useState("");

  const todoInputHandler = (newTodo) => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    newTodoItem && onAddTodo(newTodoItem);

    setNewTodoItem("");
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="오늘의 할 일은?"
        placeholderTextColor={"#999"}
        onChangeText={todoInputHandler}
        onSubmitEditing={addTodoHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={"추가"} color="#3143e8" onPress={addTodoHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
