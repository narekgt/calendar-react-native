import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { CalendarView } from '../components/CalendarView';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AddTodo />
      <CalendarView />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
