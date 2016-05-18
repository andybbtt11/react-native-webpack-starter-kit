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
        user={state.user}
        {...actions}
      />
    );
  }
}

export default connect(state => ({
    state: state.user
  }),
  (dispatch) => ({
    actions: bindActionCreators(BannerActions, dispatch)
  })
)(BannerApp);
