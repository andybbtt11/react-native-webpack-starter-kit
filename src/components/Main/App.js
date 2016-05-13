/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React from 'react-native'
import WebView from './WebView'
import GlobalStyle from '../../styles/GlobalStyle'

const {
  NavigatorIOS,
  AlertIOS,
} = React

const App = () =>
  <NavigatorIOS
    barTintColor="#2A3744"
    initialRoute={{
      component: WebView,
      onRightButtonPress: () => AlertIOS.alert('Search', 'You pressed the button'),
      rightButtonTitle: 'Search',
      title: 'Stop & Shop',
    }}
    style={GlobalStyle.mainContainer}
    tintColor="#EFEFEF"
    titleTextColor="#EFEFEF"
  />

export default App
