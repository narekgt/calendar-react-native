import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { TodoItem } from './TodoItem';
import { styles } from '../styles/CalendarView.styles';

export const CalendarView: React.FC = () => {
   const todos = useSelector((state: RootState) => state.todos.todos);
   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

   const filteredDate = todos.filter(todo => todo.date === selectedDate);

   return (
      <View style={styles.container}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem {...item} />}
          ListEmptyComponent={<Text style={styles.empty}>No tasks for this day</Text>}
        />
      </View>
    );
}