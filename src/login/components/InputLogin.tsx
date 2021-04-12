import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const InputLogin = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <TextInput {...props} style={styles.input} onChangeText={props.onChange} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white'
  }
})

export default InputLogin
