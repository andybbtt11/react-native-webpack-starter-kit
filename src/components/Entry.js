import React, {
  Component,
  View,
  Text,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

export default class Entry extends Component {
  constructor(props) {
    super(props);
  }

  showAlert() {
    AlertIOS.alert('props', this.props);
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={this.showAlert} >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
