/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React from 'react-native'
import MediaListView from '../components/MediaListView'
import GlobalStyle from '../styles/GlobalStyle'

const {
  NavigatorIOS,
  AlertIOS,
} = React

const App = () =>
  <NavigatorIOS
    barTintColor="#702779"
    initialRoute={{
      component: MediaListView,
      onRightButtonPress: () => AlertIOS.alert('Search', 'You pressed the button'),
      rightButtonTitle: 'Search',
      title: 'Stop & Shop',
    }}
    style={GlobalStyle.mainContainer}
    tintColor="#FFF"
    titleTextColor="#FFF"
  />

export default App
