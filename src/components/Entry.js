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
    const { OPCO_PROPERTIES } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OPCO: {OPCO_PROPERTIES.opco}</Text>
        <Text>OPCO DISPLAY: {OPCO_PROPERTIES.display}</Text>
        <Text>OPCO ALT: {OPCO_PROPERTIES.alt}</Text>
        <Text>OPCO CARD: {OPCO_PROPERTIES.card_display}</Text>
      </View>
    );
  }
}
