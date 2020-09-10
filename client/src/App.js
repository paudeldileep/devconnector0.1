import React,{ Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


//Redux
import { Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';

import './App.css';
import setAuthToken from './utils/setAuthToken';



if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App=()=> {

  useEffect(()=>{
    store.dispatch(loadUser());
  },[])

  
  return(
  <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Container>
        
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Container>
    </Fragment>
  </Router>
  </Provider>

  );
  }


export default App;
