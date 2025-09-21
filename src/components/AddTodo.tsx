import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import { styles } from '../styles/AddTodo.styles'

export const AddTodo: React.FC = () => {
   const dispatch = useDispatch();
   const [text, setText] = useState('');
   const [date, setDate] = useState(new Date());

   const handleAdd = () => {
      if (text.trim() === '') {
         return;
      }
      const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD
      dispatch(addTodo({ text, date: formattedDate }));
      setText('');
   };

  return (
   <View style={styles.container}>
     <TextInput
       style={styles.input}
       placeholder="Enter task"
       value={text}
       onChangeText={setText}
     />
     <DatePicker
       date={date}
       onDateChange={setDate}
       mode="date"
     />
     <Button title="Add Todo" onPress={handleAdd} />
   </View>
 );
}