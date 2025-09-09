// Show a loading spinner when a button is clicked.
import { StyleSheet, Text, View,ActivityIndicator,TouchableOpacity } from 'react-native'
import React from 'react'

const Day15 = () => {
  const [loading, setLoading] = React.useState(false)

  const handlePress = () => {
    setLoading(true)
    // Simulate a network request
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={handlePress} disabled={loading}>
          {loading ? <ActivityIndicator color="#c43a3aff" /> : <Text>Press me</Text>}
        </TouchableOpacity>
    </View>
  )
}

export default Day15

const styles = StyleSheet.create({})