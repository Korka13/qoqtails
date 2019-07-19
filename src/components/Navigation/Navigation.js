import React from 'react';

import './Navigation.css';
const Navigation = ({ changeRoute, isSignedIn, route }) => {
      return (
        <nav className="Navigation">
          <p className="Navigation-brand">QoQtails</p>
          {
            !isSignedIn
            ? <div className="Navigation-buttons">
                <button className="Navigation-button" onClick={() => changeRoute('signin')} >Sign In</button>
                <button className="Navigation-button" onClick={() => changeRoute('register')} >Register</button>
              </div>
            : <div className="Navigation-buttons">
                {
                  route === 'home'
                  ? <button className="Navigation-button" onClick={() => changeRoute('savedQoqtails')}>My Qoqtails</button>
                  : <button className="Navigation-button" onClick={() => changeRoute('home')}>Home</button>
                }                
                <button className="Navigation-button" onClick={() => changeRoute('signin')}>Sign Out</button>
              </div>
          }
        </nav>
      );
    }


export default Navigation;