/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated, { Layout, FadeIn, FadeOut } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todosSlice';
import { Todo } from '../types/todos';

interface TodoItemProps extends Todo {}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, date: _date }) => {
   const dispatch = useDispatch();

   return (
      <Animated.View
         layout={Layout.springify()}
         entering={FadeIn}
         exiting={FadeOut}
         style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            marginVertical: 4,
            backgroundColor: completed ? '#d3ffd3' : '#fff',
            borderRadius: 8,
         }}
      >
         <TouchableOpacity onPress={() => dispatch(toggleTodo(id))}>
            <Text style={{ textDecorationLine: completed ? 'line-through' : 'none', fontSize: 16}}>
               {text}
            </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => dispatch(deleteTodo(id))}>
            <Text style={{ color: 'red' }}>Delete</Text>
         </TouchableOpacity>
      </Animated.View>
   );
};
