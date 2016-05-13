import React from 'react-native'

const { StyleSheet } = React

// Global styles
export default StyleSheet.create({
  searchBar: {
    marginTop: 64,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  },
})
