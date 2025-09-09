//Build a counter app with + and - buttons.

// UseState | Initialize state variable 'count' with 0
// Increment count
// Decrement count

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
    backgroundColor:"#8d5f7eff",
    padding: 15,
     justifyContent:"center",
     alignItems:"center",
     borderWidth:8,
     borderRadius:15
  },
  textContainer1:{
 backgroundColor:"#6b98b3ff",
paddingVertical: 25,
    paddingHorizontal: 60,
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 25,
    borderColor:'white',
    borderWidth: 1,
   
    justifyContent: 'center',
  },
  textContainer:{
    backgroundColor:"#6b98b3ff",
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
    backgroundColor: '#8d5f7eff',
    padding: 10,
    borderRadius: 15,
    width: '35%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
})