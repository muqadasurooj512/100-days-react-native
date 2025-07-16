//Create a screen with two Text components. Change the text when a button is pressed.

import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useState} from 'react'

const Day1 = () => {
    const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer1}>
         <Text style={styles.text}>{count}</Text>
      
      </View>
       <View style={styles.textContainer}>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Day1

const styles = StyleSheet.create({
  container:{
    backgroundColor:"blue",
    padding: 20,
     justifyContent:"center",
     alignItems:"center",
     borderWidth:8,
     borderRadius:15
  },
  textContainer1:{
 backgroundColor:"#333",
    padding: 25,
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 15,
    borderColor:'white',
    borderWidth: 1,
    width: '50%',
    justifyContent: 'center',
  },
  textContainer:{
    backgroundColor:"#333",
    padding: 15,
    flexDirection:'row',
    justifyContent:'space-between',
    // width: '50%',
    gap: 15,
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 15,
    borderColor:'white',
    borderWidth: 1,
  },
  text:{
    color:'white',
    fontSize: 30,
    fontWeight: 'bold',

  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    width: '35%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
})