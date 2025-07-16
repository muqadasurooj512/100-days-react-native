
//Create a screen with two Text components. Change the text when a button is pressed.

import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useState} from 'react'

const App = () => {
  const [text1, setText1] = useState('Muqadas');
  const [text2, setText2] = useState('Khan');
  const textChange=()=>{
    setText1(text1 === 'Muqadas' ? 'Urooj' : 'Muqadas');
    setText2(text2 === 'Khan' ? 'Rajpoot' : 'Khan');
     console.log("Button Pressed");
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
         <Text style={styles.text}>{text1}</Text>
      <Text  style={styles.text}>{text2}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={textChange}>
        <Text style={styles.buttonText}>Press</Text>
        </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
     backgroundColor:"blue",
    padding: 20,
     justifyContent:"center",
     alignItems:"center",
     borderWidth:8,
     borderRadius:15
  },
  textContainer:{
    backgroundColor:"#333",
    padding: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    // width: '50%',
    gap: 20,
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 15,
    borderColor:'white',
    borderWidth: 1,
  },
  text:{
    color:'white',
    fontSize: 25,
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
})