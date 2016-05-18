import React, {
  Component,
  View,
  Text
} from 'react-native';

export default class Entry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <Text>Name: {user.name}</Text>
        <Text>Age: {user.age}</Text>
      </View>
    );
  }
}
