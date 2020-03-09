import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";
import { connect } from "react-redux";
import "./Nav.scss";
import { blue } from "@ant-design/colors";

const navItems = [
	{ name: "Me", path: "/", icon: "smile" },
	{ name: "Work", path: "/work", icon: "carry-out" },
	{ name: "Projects", path: "/projects", icon: "code" },
	{ name: "Education", path: "/education", icon: "book" }
];

const GIT_CONNECTED_BASE_URL = "https://gitconnected.com/";

class Sidebar extends PureComponent {
	handleClick = e => {
		console.log("click", e);
	};

	render() {
		if (!this.props.user || !this.props.user.basics) {
			return <div />;
		}

		const user = this.props.user;

		return (
			<Menu className="Nav" onClick={this.handleClick} mode="horizontal">
				{navItems.map(item => {
					return (
						<Menu.Item className="menu-item" key={item.name}>
							<NavLink exact to={item.path}>
								<Icon type={item.icon} theme="twoTone" />
								{item.name}
							</NavLink>
						</Menu.Item>
					);
				})}
				<Menu.Item className="menu-item" key="resume">
					<a
						href={`${GIT_CONNECTED_BASE_URL}${user.basics.username}/resume`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon type="file-text" theme="twoTone" />
						Resume
					</a>
				</Menu.Item>
			</Menu>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Sidebar);
