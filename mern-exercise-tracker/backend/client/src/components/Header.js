import { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import image from "../resources/images/logo.jpg";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return "loading";
			case false:
				return (
					<li>
						<a href="/auth/google">Log in with Google</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper" style={{ Width: "100%", Height: "10%" }}>
					<Link
						to={this.props.auth ? "/surveys" : "/"}
						className="left brand-logo"
					>
						Anaomail
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
