import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Entry from '../components/Entry';
import * as BannerActions from '../actions/BannerActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class BannerApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Entry/>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(BannerActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerApp);
