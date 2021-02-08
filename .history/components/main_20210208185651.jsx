import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import TodoInsert from "./todoInsert";
import TodoList from "./todoList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@save_todossssssssss";

const Main = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text, checked: false },
    ]);
    saveData(setTodos(todos));
  };

  const onRemove = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    saveData(todos);
  };

  const onToggle = (id) => (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    saveData(todos);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      jsonValue != null ? setTodos(JSON.parse(jsonValue)) : null;
      console.log(`get: ${jsonValue}`);
    } catch (e) {
      console.log(`getError: ${e}`);
    }
  };

  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      console.log(`save: ${jsonValue}`);
    } catch (e) {
      consosle.log(`saveError: ${e}`);
    }
  };

  const removeEverything = async () => {
    try {
      await AsyncStorage.clear();
      alert("모든 데이터 초기화 완료 재접속 하세요 ♥️");
    } catch (e) {
      alert("오류 ♥️");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>오늘의 할 일</Text>
      <TouchableOpacity onPress={removeEverything}>
        <Text>초기화</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          saveData={saveData}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3143e8",
  },
  appTitle: {
    color: "#fff",
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "300",
    textAlign: "center",
    backgroundColor: "#3143e8",
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Main;
