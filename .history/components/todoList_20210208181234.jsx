import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import TodoListItem from "./todoListItem";

const TodoList = ({ todos, onRemove, onToggle, saveData }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
          saveData={saveData}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
  },
});

export default TodoList;
