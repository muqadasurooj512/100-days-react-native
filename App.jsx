import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Day2 from './src/Day2'
import Day7 from './src/Day7'

const App = () => {
  return (
    <View style={styles.container}>
     {/* <Day1 /> */}
   {/* <Day2/> */}
   <Day7/>
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