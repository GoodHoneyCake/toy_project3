import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import TodoListItem from "./todoListItem";

const TodoList = ({ todos, onRemove, onToggle, onSave }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
          onSave={saveData}
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
