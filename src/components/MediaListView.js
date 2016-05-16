import React from 'react-native'
import GlobalStyle from '../styles/GlobalStyle'

const {
  View,
  Text,
  TouchableHighlight,
  AlertIOS,
} = React

class MediaListView extends React.Component {

  getProfileData() {
    fetch('https://stopandshop.com/auth/profile/SNS?origin=mobile', {
      method: 'GET',
      headers: {'Authorization': 'Bearer f2362eeda4f72e8c8cfa8ae57be52618c0a7a6f174110fc06ffc3462174140cc'},
    })
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(
          'Thanks for requesting this info: ',
          'First Name: ' + responseData.first_name + 'Card Number: ' + responseData.card_number
      )
    })
    .done()
  }

  render() {
    return(
      <View>
          <TouchableHighlight
            onPress={this.getProfileData}
            style={GlobalStyle.content}
          >
            <Text>Press Here</Text>
          </TouchableHighlight>
      </View>
    )
  }
}

export default MediaListView
