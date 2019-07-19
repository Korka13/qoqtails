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
  const oppositeRoute = route === 'signin' ? 'Register' : 'Sign In';
  const oppositeRouteCommand = route === 'signin' ? 'register' : 'signin';
  const submitUrl = route === 'signin' ? signInUrl : registerUrl;

      return (
        <div className="Signin-container">
          <div className="Signin-form">
            <h1>{title}</h1>
            {
              signInError.length ? <p style={{color: 'red'}}>{signInError}</p> : null
            }
              <div className="Signin-input">                    
                <input 
                type="text" 
                placeholder="username" 
                onChange={onUsernameChange} 
                />
              </div>

              <div className="Signin-input">
                <input 
                type="password" 
                placeholder="password" 
                onChange={onPasswordChange} />
              </div>

              <button onClick={() => onSubmitSignIn(submitUrl)} type="submit">{title}</button>
              <p onClick={() => changeRoute(oppositeRouteCommand)} className="">{oppositeRoute}</p>
            </div>
        </div>

      );
  }

export default Signin;