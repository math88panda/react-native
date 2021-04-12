import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Dimensions from '../../utils/dimensions'

const ButtonLogin = props => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="login" {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: Dimensions.setPixel.wp('80%'),
    padding: 10,
    borderRadius: 10
  }
})

export default ButtonLogin
