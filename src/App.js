import React, {Component} from 'react';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import SearchForm from './components/SearchForm/SearchForm';
import ListResults from './components/ListResults/ListResults';
import MyQoqtails from './components/MyQoqtails/MyQoqtails';

import './App.css';

const serverUrl = `http://${process.env.REACT_APP_SERVER_IP}:8080/`
const getQoqtailById = "getqoqtailbyid/";
const searchByName= "searchqoqtailbyname/";
const addQoqtailUrl = 'addqoqtail/'
const deleteQoqtailUrl = 'deleteqoqtail/'
const signInUrl = "signin/";
const registerUrl = "register/";
let timeout = null;

const initialState = {
  route: 'signin',
  signInUsername: '',
  signInPassword: '',
  isSignedIn: false,
  signInError: '',
  results: [],
  user: {
    id: '',
    username: '',
    qoqtails: [],
    currentQoqtail: {},
    joined: ''    
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      username: data.username,
      qoqtails: data.qoqtails,
    }});
    if (data.qoqtails && data.qoqtails.length) {
      this.getQoqtail(data.qoqtails[0].id)
    }    
  }

  onUsernameChange = (event) => {
    this.setState({signInUsername: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = (loginMode) => {
    fetch(serverUrl + loginMode, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.id){
          this.loadUser(response);
          this.changeRoute('home');
        } else if (response.msg) {
          this.setState({signInError: response.msg})
        }
      });
    }

  getQoqtail = (id) => {
    fetch(serverUrl + getQoqtailById + id)
    .then(response => response.json())
    .then(response => {
      this.setState(prevState => {
        return {
          user: {
            ...prevState.user,
            currentQoqtail: response[0]
          }
        }
      })
    })
    .catch(err => console.log(err));
  }

  onInputChange = (event) => {
    let input = event.target.value;
    input = input.replace(/^\s+/, '');
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.searchQoqtail(searchByName, input)
    }, 200);
  }

  searchQoqtail = (searchBy, term) => {
    if (term.length > 0) {
      fetch(serverUrl + searchBy + term)
    .then(response => response.json())
    .then(response => {
      this.setState({results: response});
    })
    .catch(err => console.log(err));
    } else {
        this.setState({results: []})
      }
  }

  changeRoute = (route) => {
    if (route !== 'home' && route !== 'savedQoqtails') {
      this.setState({isSignedIn: false})
    } else if (route === 'home' || route === 'savedQoqtails') {
      this.setState({isSignedIn: true})
    }
    this.setState(prevState => {
      return {
        ...prevState,
        route: route,
        results: [],
        signInError: ''
      }
    });
  }

  saveQoqtail = (id, name) => {
    fetch(serverUrl + addQoqtailUrl, {
      method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id,
          qoqtailId: id,
          name: name
        })})
    .then(response => response.json())
    .then(response => {
      this.setState(prevState => {
        return {
          user: {
            ...prevState.user,
            qoqtails: response
          }
        }
      })
      this.getQoqtail(response[0].id)
    })
    .catch(err => console.log(err));
  }

  deleteQoqtail = (id) => {
    fetch(serverUrl + deleteQoqtailUrl, {
      method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id,
          qoqtailId: id,
        })})
    .then(response => response.json())
    .then(response => {
      if (response.length) {
        this.getQoqtail(response[0].id)
      } else {
        this.setState(prevState => {
          return {
            user: {
              ...prevState.user,
              currentQoqtail: {}
            }
          }
        })
      }
      this.setState(prevState => {
        return {
          user: {
            ...prevState.user,
            qoqtails: response
          }
        }
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    const {
            route,
            user,
            results,
            isSignedIn,
            signInError
          } = this.state;
    
    const {
            changeRoute,
            onInputChange,
            loadUser,
            saveQoqtail,
            deleteQoqtail,
            getQoqtail,
            onPasswordChange,
            onUsernameChange,
            onSubmitSignIn
          } = this;

      return (
        <div className="App">
          <Navigation 
          changeRoute={changeRoute} 
          isSignedIn={isSignedIn} 
          route={route} 
          />

          { route === 'home' 
            ? <div>
                <SearchForm 
                onInputChange={onInputChange} 
                />
                <ListResults 
                data={results} 
                saveQoqtail={saveQoqtail} 
                user={user} 
                deleteQoqtail={deleteQoqtail} 
                />
              </div>
            : (
              route === 'savedQoqtails'
              ? <MyQoqtails 
                user={user} 
                deleteQoqtail={deleteQoqtail} 
                getQoqtail={getQoqtail} 
                saveQoqtail={saveQoqtail} 
                />
              : <Signin 
                changeRoute={changeRoute} 
                loadUser={loadUser} 
                route={route} 
                onPasswordChange={onPasswordChange} 
                onUsernameChange={onUsernameChange} 
                onSubmitSignIn={onSubmitSignIn} 
                signInUrl={signInUrl} 
                registerUrl={registerUrl} 
                signInError={signInError} 
                />
              )
            }
        </div>
      );
  }
}

export default App;
