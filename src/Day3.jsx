//Make a button that changes the background color randomly when pressed.

// Function/Method	|Short Explanation
// Math.random()	  |Generates a random decimal between 0 (inclusive) and 1
// * 16777215	      |Scales the random value to max hex color range (#FFFFFF)
// Math.floor()	    |Removes decimal, returns an integer
// .toString(16)	  |Converts the integer to a hexadecimal string
// .padStart(6, '0')|	Ensures the hex string is always 6 characters (adds 0s if needed)
// `#${...}`	      |Adds # at the start to make it a valid hex color code 

import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Day3 = () => {
  const [backgroundColor, setBackgroundColor] = React.useState();
  const randomColor=()=>{
    return `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  }
  return (
    <View style={[styles.container,{ backgroundColor: backgroundColor}]}>

        <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor(randomColor())}>
              <Text style={styles.buttonText}>Press</Text>
              </TouchableOpacity>

    </View>
  )
}

export default Day3


const styles = StyleSheet.create({
   container:{
    padding: 20,
     justifyContent:"center",
     alignItems:"center",
     borderWidth:8,
     borderRadius:15
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