// Add two images and a button that hides one image when clicked.
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'


const Day6 = () => {
    const [showImage, setShowImage] = React.useState(true);
    const ImageHide = () => {
        setShowImage(!showImage);
        // console.log("Image is hidden");
    }
  return (
    <View style={{ flex: 1, backgroundColor: '#141212ff', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 20, marginBottom: 40 }}>
            <Image source={require('../assets/images/image.jpg')}  style={{ width: 150, height: 150, borderRadius:100}} />
            {showImage && 
                      <Image source={require('../assets/images/image.jpg')} 
                       style={{ width: 150, height: 150, borderRadius:100}} />}

        </View>
      
      <TouchableOpacity style={styles.button}  onPress={ImageHide}>
              <Text style={styles.buttonText}>Press</Text>
              </TouchableOpacity>
      
    </View>
  )
}

export default Day6

const styles = StyleSheet.create({
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