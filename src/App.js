import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import { connect } from 'react-redux';
import { ProfileActions } from './store/actions/index';

import Nav from './components/Nav';
import UserHeader from './components/UserHeader';
import { Pages } from './pages';

class App extends React.Component {
  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <UserHeader />
        <Pages />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(ProfileActions.getProfile())
  };
};

App.propTypes = {
  getProfile: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
