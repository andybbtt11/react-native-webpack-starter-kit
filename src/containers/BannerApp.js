import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Entry from '../components/Entry';
import * as BannerActions from '../actions/BannerActions';
import { connect } from 'react-redux';

class BannerApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Entry
        OPCO_PROPERTIES={state.OPCO_PROPERTIES}
        {...actions}
      />
    );
  }
}

function bindState(state) {
  return {
    state: state.user
  };
}

function bindActions(dispatch) {
  return {
    actions: bindActionCreators(BannerActions, dispatch)
  };
}

export default connect(bindState, bindActions)(BannerApp);
