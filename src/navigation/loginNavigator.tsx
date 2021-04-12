import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

/* screen components */
import LoginScreen from '../login/screen'
import CadastroScreen from '../usuario/screens/cadastro'
import CadastroRegularScreen from '../usuario/screens/cadastroRegular'
import CadastroEmpresaScreen from '../usuario/screens/cadastroEmpresa'

const LoginStack = createStackNavigator()

const options = {
  navigatorOptions: {

  },
  screens: {
    Login: {
      title: 'Login'
    },
    Cadastro: {
      title: 'Cadastro'
    },
    CadastroRegular: {
      title: 'Cadastro Cliente'
    },
    CadastroEmpresa: {
      title: 'Cadastro Empresa'
    }
 }
}

export default () => (
  <LoginStack.Navigator initialRouteName="Login">
    <LoginStack.Screen 
      name="Login" 
      component={LoginScreen} 
      options={options.screens.Login} 
    />
    <LoginStack.Screen 
      name="Cadastro" 
      component={CadastroScreen} 
      options={options.screens.Cadastro} 
    />
    <LoginStack.Screen 
      name="CadastroRegular" 
      component={CadastroRegularScreen} 
      options={options.screens.CadastroRegular} 
    />
    <LoginStack.Screen 
      name="CadastroEmpresa" 
      component={CadastroEmpresaScreen} 
      options={options.screens.CadastroEmpresa} 
    />
  </LoginStack.Navigator>
)
