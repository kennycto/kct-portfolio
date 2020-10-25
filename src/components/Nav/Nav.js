import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { PageActions } from '../../store/actions';
import { navItems } from '../../constants/navigation';
import './Nav.scss';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const GIT_CONNECTED_BASE_URL = 'https://gitconnected.com/';

class Sidebar extends PureComponent {
  static propTypes = {
    page: PropTypes.string,
    user: PropTypes.object,
    setPage: PropTypes.func,
  };

  handleClick = (e) => {
    console.log('click', e);
  };

  render() {
    const { page } = this.props;

    if (!this.props.user || !this.props.user.basics) {
      return <div />;
    }

    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs value={page} onChange={this.handleChange} centered>
          {navItems.map((item, index) => {
            return (
              <Tab
                label={item.name}
                key={item.name}
                component={Link}
                value={navItems[index].path}
                to={navItems[index].path}
              />
            );
          })}
        </Tabs>
      </Paper>
    );
  }

  handleChange = (e, page) => {
    if (page === '/export') {
      this.props.setPage('/');
      window.open(
        `${GIT_CONNECTED_BASE_URL}${this.props.user.basics.username}/resume`,
        '_blank',
      );
    } else {
      this.props.setPage(page);
    }
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    page: state.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => dispatch(PageActions.setPage(page)),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar),
);
