import React from 'react-native'
import SearchBar from './SearchBar'
import GlobalStyle from '../../styles/GlobalStyle'

const {
  View,
  Text,
} = React

class MediaListView extends React.Component {
  render() {
    return(
      <View style={GlobalStyle.content}>
          <SearchBar/>
          <Text>This is MediaListView component!</Text>
      </View>
    )
  }
}

export default MediaListView
