//Display your name and a picture on the screen.

import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'


const Day4 = () => {
  return (
    <View style={{ flex:1,backgroundColor: '#141212ff',justifyContent: 'center',alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 24, bottom:20}}>Muqadas_Urooj</Text>
     <Image source={require('../assets/images/image.jpg')} style={{  borderRadius: 200}}/>

    </View>
  )
}

export default Day4

const styles = StyleSheet.create({})