import React from 'react'
import { View, TouchableNativeFeedback, Text, StyleSheet } from 'react-native'
import Dimensions from '../../utils/dimensions'

const ButtonOptions = props => {
  const { onPress } = props
  return (
    <TouchableNativeFeedback style={styles.touchable} onPress={onPress}>
      <View style={{...styles.container, ...props.style}}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1
  },
  container: {
    width: Dimensions.setPixel.wp('90%'),
    height: Dimensions.setPixel.hp('30%'),
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: Dimensions.setPixel.wp('100%')    
  },
  text: {
    color: 'white'
  }
})

export default ButtonOptions
