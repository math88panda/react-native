import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import store from './src/store/mainStore'
import MainNavigator from './src/navigation/mainNavigator'

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
