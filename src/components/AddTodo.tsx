import React, { useState } from 'react';
import { View, TextInput, Button, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import { styles } from '../styles/AddTodo.styles';

export const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleAdd = () => {
    if (text.trim() === '') return;

    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
    dispatch(addTodo({ text, date: formattedDate }));
    setText('');
  };

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
      />

      <Button title="Pick a date" onPress={() => setShowPicker(true)} />

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}

      <Button title="Add Todo" onPress={handleAdd} />
    </View>
  );
};
