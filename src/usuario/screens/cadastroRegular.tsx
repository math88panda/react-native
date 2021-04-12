import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CadastroRegularScreen = props => {
  const { navigation } = props
  return (
    <View style={styles.screen}>
      <Text>Cadastro Regular</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default CadastroRegularScreen
