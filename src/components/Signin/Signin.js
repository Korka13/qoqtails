import React from 'react';

import './Signin.css';

const Signin = props => {
	const {
		route,
		changeRoute,
		onPasswordChange,
		onUsernameChange,
		submitSignIn,
		signInUrl,
		registerUrl,
		signInError,
		handleKeyDown
	} = props;

	const title = route === 'signin' ? 'Sign In' : 'Register';
	const oppositeRouteTitle =
		route === 'signin'
			? "Don't have an account yet?"
			: 'Already have an account?';
	const oppositeRouteCommand = route === 'signin' ? 'register' : 'signin';
	const submitUrl = route === 'signin' ? signInUrl : registerUrl;

	return (
		<div className="Signin">
			<div className="Signin-form">
				<h1 className="Signin-title">{title}</h1>
				{signInError.length ? (
					<p className="Signin-error">{signInError}</p>
				) : null}
				<div className="Signin-input-container">
					<input
						className="Signin-input"
						type="text"
						placeholder="username..."
						onChange={onUsernameChange}
						onKeyDown={handleKeyDown}
					/>
				</div>

				<div className="Signin-input-container">
					<input
						className="Signin-input"
						type="password"
						placeholder="password..."
						onChange={onPasswordChange}
						onKeyDown={handleKeyDown}
					/>
				</div>

				<button
					className="Signin-submit"
					onClick={() => submitSignIn(submitUrl)}
					type="submit"
				>
					{title}
				</button>
				<p
					onClick={() => changeRoute(oppositeRouteCommand)}
					className="Signin-changeroute"
				>
					{oppositeRouteTitle}
				</p>
			</div>
		</div>
	);
};

export default Signin;
