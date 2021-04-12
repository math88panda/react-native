import React, { useState } from 'react'
import { TouchableNativeFeedback, Keyboard, View, StyleSheet, Text } from 'react-native'
import Dimensions from '../utils/dimensions'

/* custom components */
import InputLogin from './components/InputLogin'
import ButtonLogin from './components/ButtonLogin'

const LoginScreen = props => {
  const { navigation } = props
  const [email,setEmail] = useState(null)
  const [senha,setSenha] = useState(null)

  const goToCadastro = (): void => {
    navigation.push('Cadastro') 
  }

  return (
    <TouchableNativeFeedback style={styles.screen} onPress={() => Keyboard.dismiss()}>
      <View style={styles.overallContainer}>
        <View style={styles.inputContainer}>
          <InputLogin placeholder="Email" onChangeText={input => setEmail(input)} />
          <InputLogin placeholder="Senha" onChangeText={input => setSenha(input)} />
        </View>
        <ButtonLogin onPress={() => {}} color="red" />
        <ButtonLogin title="Cadastrar" onPress={goToCadastro} color="green" />
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  overallContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    margin: 5,
    width: Dimensions.setPixel.wp('85%')
  },
  cadastro: {
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline'
  }
})

export default LoginScreen
