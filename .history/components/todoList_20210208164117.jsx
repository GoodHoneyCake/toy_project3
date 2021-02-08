import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';


const TodoList = () =>{
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
          <Text>TodoList</Text>
        </ScrollView>
      );
    };
}

export default TodoList;