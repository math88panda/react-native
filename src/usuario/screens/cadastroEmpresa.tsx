import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CadastroEmpresaScreen = props => {
  const { navigation } = props
  return (
    <View style={styles.screen}>
      <Text>Cadastro Empresa</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default CadastroEmpresaScreen
