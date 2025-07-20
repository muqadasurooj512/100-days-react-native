import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Day2 from './src/Day2'
import Day8 from './src/Day8'

const App = () => {
  return (
    <View style={styles.container}>
     {/* <Day1 /> */}
   {/* <Day2/> */}
   <Day8/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
})