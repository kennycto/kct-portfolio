import React, { PureComponent } from 'react'

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import './pages.scss';

class Pages extends PureComponent {
	render() {
		if (!this.props.user || !this.props.user.basics) {
			return <div />
		}

		const user = this.props.user;
		return (
			<div className="Pages">
				<Switch>
					<Route exact path='/'>
						<Me user={user} />
					</Route>
					<Route exact path='/projects'>
						<Projects user={user} />
					</Route>
					<Route exact path='/work'>
						<Work user={user} />
					</Route>
					<Route exact path='/education'>
						<Education user={user} />
					</Route>
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Pages);