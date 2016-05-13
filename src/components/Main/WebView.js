import React from 'react-native'
import GlobalStyle from '../../styles/GlobalStyle'

const {
  WebView,
} = React

class MediaListView extends React.Component {

  render() {
    return(
      <WebView
        source={{uri:'http://www.yahoo.com'}}
        style={GlobalStyle.webView}
      />
    )
  }
}

export default MediaListView
