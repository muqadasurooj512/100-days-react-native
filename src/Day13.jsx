// Show a list of 5 fruits using FlatList.
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'


const Day13 = () => {
  const fruits = [
  { id: '1', name: 'Apple' },
  { id: '2', name: 'Banana' },
  { id: '3', name: 'Orange' },
  { id: '4', name: 'Mango' },
  { id: '5', name: 'Pineapple' },
];
  return (
    <View>
        <Text style={{ color: '#367c53ff', fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Fruits List</Text>
        <FlatList
          data={fruits}
          renderItem={({ item }) => (
            <Text style={{ fontSize: 24, marginVertical: 10 }}>{item.name}</Text>
          )}
          keyExtractor={(item) => item.id}
        />
    </View>
  )
}

export default Day13

const styles = StyleSheet.create({})