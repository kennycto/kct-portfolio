import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animated, useTransition } from 'react-spring';

import { Switch, Route, withRouter, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Me, Projects, Work, Education } from '../.';
import { PageActions } from '../../store/actions';

Pages.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
  setPage: PropTypes.func,
};

const cssBase = 'pages';

function Pages(props) {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(5%, 0, 0' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0' },
    leave: { display: 'none' },
  });

  useEffect(() => {
    const { pathname } = props.location;
    props.setPage(pathname);
  });

  const user = props.user;

  if (!user || !user.basics) {
    return <div />;
  }

  return (
    <div className={cssBase}>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/">
                <Me user={user} />
              </Route>
              <Route exact path="/work">
                <Work user={user} />
              </Route>
              <Route exact path="/projects">
                <Projects user={user} />
              </Route>
              <Route exact path="/education">
                <Education user={user} />
              </Route>
            </Switch>
          </animated.div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => dispatch(PageActions.setPage(page)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pages));
