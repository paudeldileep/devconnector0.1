import React, { Fragment } from 'react';
import {Container, Header, Button} from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export const Home = ({isAuthenticated}) => {

  if(isAuthenticated){
    return <Redirect to='/dashboard'/>;
  }
    return (
      <Fragment>
          <Container fluid textAlign="center" className="homeContainer">
            <Header as='h1'>My Circle</Header>
            <Header as="h4" >
            Create a User profile/portfolio, share posts and interact with other users
            </Header>
           
               
        <Button.Group size='huge' verticalAlign='middle' textAlign="center">
            <Button as={Link} to="/register" color="teal" >Sign Up</Button>
            <Button.Or />
            <Button as={Link} to="/login">Sign In</Button>
        </Button.Group>
        
    
          </Container>
      </Fragment>
    )
}

Home.propTypes ={
  isAuthenticated :PropTypes.bool
}

const mapStateToProps =state =>({
  isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);
