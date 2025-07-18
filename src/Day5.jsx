//Create a screen with an input field and show the entered text below it in real-time.
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Day5 = () => {
  const [text, setText] = React.useState('');
  return (
    <View style={{ flex:1,backgroundColor: '#d6babaff',justifyContent: 'center',alignItems: 'center' }}>
      <TextInput placeholder='Type something...'
      value={text}
        onChangeText={setText}
        style={{ width: '80%', height: 50, borderColor: 'white', borderWidth: 5, borderRadius: 10, paddingHorizontal: 10, color: 'red' ,marginBottom: 20}}
      />
      <Text style={{ color: 'white', fontSize: 24, }}> You typed: {text}</Text>
    </View>
  )
}

export default Day5

const styles = StyleSheet.create({})