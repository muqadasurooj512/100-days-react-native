//Build a to-do list where you can add tasks.
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Day11 = () => {
  const [task, setTask] = React.useState('');
  const [list, setList] = React.useState([]); 

  // Function to add a new task to the list
  const addTask = () => {
    if(task.trim() !== '') {
      setList([...list, {id:Date.now().toString(), title: task}]); 
      console.log(list);
      console.log(task); 
      setTask(''); 
    }

  }
  



  return (
    <View style={styles.container}>
      <Text style={{ color: '#367c53ff', fontSize: 50, fontWeight: 'bold', marginBottom: 20 }}>To-Do List</Text>
      <View style={styles.innerContainer}>
         <TextInput 
        placeholder='Add a new task'
        placeholderTextColor="white"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}  >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      </View>
       <View style={{ width: '80%', paddingTop: 20, justifyContent: 'center' }}>
        <Text style={{ color: '#367c53ff', fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>Tasks:</Text>
         {/* Map through the list and display each task */}
         {list.length === 0 && <Text style={{ color: 'white', fontSize: 16 }}>No tasks added yet.</Text>}
         {list.map(item => (
           <View key={item.id} style={{ marginBottom: 10, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#367c53ff', borderRadius: 8 }}>
             <Text style={{ color: '#070707ff', fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>{item.id}</Text>
           </View>
         ))}
       </View>
    </View>
  )
}

export default Day11

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141212ff',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#070606ff',
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#070707ff',
    fontSize: 16,
    
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    gap: 10,
    paddingVertical: 50,
    backgroundColor: '#367c53ff',
    borderRadius: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#141212ff',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#367c53ff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    
  },
})