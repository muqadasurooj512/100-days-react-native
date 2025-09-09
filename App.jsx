import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Day2 from './src/Day2'
import Day1 from './src/Day1'
import Day15 from './src/Day15'

const App = () => {
  return (
    <View style={styles.container}>
     {/* <Day1 /> */}
   {/* <Day2/> */}
   {/* <Day1/> */}
   <Day15/>
  
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#83cae9ff',
    },
})