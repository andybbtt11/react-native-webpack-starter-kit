import React from 'react-native'
import ListViewStyle from '../styles/ListView'

const {
  View,
  TextInput,
} = React

const SearchBar = () =>
  <View style={ListViewStyle.searchBar}>
    <TextInput
      autoCapilize="none"
      autoCorrect={false}
      placeholder="Search for media on iTunes..."
      style={ListViewStyle.searchBarInput}
    />
  </View>

export default SearchBar
