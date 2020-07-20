import React from "react";
import "./App.scss";

import { connect } from "react-redux";
import { ProfileActions } from "./store/actions/index";

import Nav from "./components/Nav";
import UserHeader from "./components/UserHeader";
import Pages from "./pages/Pages";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <UserHeader />
                <Pages />
            </div>
        );
    }

    componentDidMount() {
        this.props.getProfile();
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
