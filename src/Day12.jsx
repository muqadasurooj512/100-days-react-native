//Display a horizontal scroll view of colored boxes.
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const Day12 = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F', '#0FF', '#FF0'];
    const boxSize = 100;
    const boxStyle = {
        width: boxSize,
        height: boxSize,
        margin: 10,
        borderRadius: 10,
    };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {colors.map((color, index) => (
        <View key={index} style={[boxStyle, { backgroundColor: color }]} />
      ))}
    </ScrollView>
  )
}

export default Day12

const styles = StyleSheet.create({})