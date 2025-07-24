// Create a modal popup that opens when a button is pressed.
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React from 'react'

const Day10 = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: '#007bff',padding: 12,borderRadius: 10}}
       onPress={() => setModalVisible(true)}>
        <Text style={{ color: '#fff', fontSize: 16}}>Open Modal</Text>
    </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={{   flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)'}}>
          
        <View style={{  margin: 30,backgroundColor: 'white', borderRadius: 15, padding: 25, alignItems: 'center'}}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>This is a Modal Popup</Text>
          <TouchableOpacity style={{  backgroundColor: '#dc3545',  padding: 12,  borderRadius: 10,marginTop: 20}} onPress={() => setModalVisible(false)}>
            <Text style={{   color: '#fff',fontSize: 16 }}>Cancel</Text></TouchableOpacity>
        </View>
        </View>
      </Modal>
    </View>
  )
}

export default Day10

const styles = StyleSheet.create({})