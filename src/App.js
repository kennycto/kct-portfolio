import React from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { ProfileActions } from './store/actions/index';

import Nav from './components/Nav';
import UserHeader from './components/UserHeader';
import Pages from './pages';

class App extends React.Component {
  componentDidMount() {
    this.props.getProfile();
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
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(ProfileActions.getProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
