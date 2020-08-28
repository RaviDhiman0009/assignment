/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import ReduxStore from './redux/store'

import Main from './screens/main'

const store = ReduxStore()

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <Provider store={store}>
          <Main />
        </Provider>
      </SafeAreaView>
    </>
  )
}

export default App
