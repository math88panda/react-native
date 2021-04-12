import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

/* custom components */
import ButtonOptions from '../components/ButtonOptions'

const CadastroScreen = props => {
  const { navigation } = props

  const goToCadastroRegular = (): void => {
    navigation.push('CadastroRegular')
  }

  const goToCadastroEmpresa = (): void => {
    navigation.push('CadastroEmpresa')
  }

  return (
    <View style={styles.screen}>
      <ButtonOptions onPress={() => goToCadastroRegular()} style={styles.clientButton} title="Cliente" />
      <ButtonOptions onPress={() => goToCadastroEmpresa()} style={styles.empresaButton} title="Empresa" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  clientButton: {
    backgroundColor: 'red',
    flex: 1
  },
  empresaButton: {
    backgroundColor: 'blue',
    flex: 1
  }
})

export default CadastroScreen
