import React, { Fragment } from 'react';
import {Container, Header, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export const Home = () => {
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

export default Home;
