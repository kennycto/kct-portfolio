import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./UserHeader.scss";

const GIT_CONNECTED_BASE_URL = "https://gitconnected.com/";

class UserHeader extends PureComponent {
	render() {
		if (!this.props.user || !this.props.user.basics) {
			return <div />;
		}

		const user = this.props.user;

		return (
			<div className="UserHeader">
				<img
					className="UserHeader-avatar"
					src={user.basics.picture}
					alt={user.basics.name}
				/>
				<div className="details">
					<span className="title">{user.basics.name}</span>
					<h4>
						<a
							href={`${GIT_CONNECTED_BASE_URL}${user.basics.username}`}
							target="_blank"
							rel="noreferrer noopener"
						>
							@{user.basics.username}
						</a>
					</h4>
					<span>{user.basics.label}</span>
					<span>{user.basics.region}</span>
					<span>
						{user.basics.yearsOfExperience} years of experience as a
						developer.
					</span>
					<span>{user.basics.headline}</span>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(UserHeader);
