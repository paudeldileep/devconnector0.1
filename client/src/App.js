import React,{ Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//Redux
import { Provider} from 'react-redux';
import store from './store';

import './App.css';

const App=()=> (
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


export default App;
