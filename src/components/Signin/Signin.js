import React from 'react';

import './Signin.css';

const Signin = (props) => {

  const {
          route,
          changeRoute,
          onPasswordChange,
          onUsernameChange,
          onSubmitSignIn,
          signInUrl,
          registerUrl,
          signInError
        } = props

  const title = route === 'signin' ? 'Sign In' : 'Register';
  const oppositeRouteTitle = route === 'signin' ? "Don't have an account yet?" : 'Already have an account?';
  const oppositeRouteCommand = route === 'signin' ? 'register' : 'signin';
  const submitUrl = route === 'signin' ? signInUrl : registerUrl;

      return (
        <div className="Signin-container">
          <div className="Signin-form">
            <h1 className="Signin-title">{title}</h1>
            {
              signInError.length ? <p className="Signin-error">{signInError}</p> : null
            }
              <div className="Signin-input-container">                    
                <input 
                className="Signin-input"
                type="text" 
                placeholder="username..." 
                onChange={onUsernameChange} 
                />
              </div>

              <div className="Signin-input-container">
                <input 
                className="Signin-input"
                type="password" 
                placeholder="password..." 
                onChange={onPasswordChange} />
              </div>

              <button className="Signin-submit" onClick={() => onSubmitSignIn(submitUrl)} type="submit">{title}</button>
              <p onClick={() => changeRoute(oppositeRouteCommand)} className="Signin-changeroute">{oppositeRouteTitle}</p>
            </div>
        </div>

      );
  }

export default Signin;