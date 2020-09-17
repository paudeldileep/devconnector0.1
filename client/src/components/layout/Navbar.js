import React,{useState,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';


const Navbar = ({auth:{isAuthenticated,loading},logout})=>{
    //state = { activeItem: 'home' }

    const [activeItem,setActiveItem]=useState('home');

    const authLinks = (
        <Fragment>
            <Menu.Item as={Link} to="/profiles"
              name='users'
              onClick={()=>setActiveItem('users')}
              color="teal"
            />
            <Menu.Item as={Link} to="/dashboard"
              name='dashboard'
              active={activeItem === 'dashboard'}
              onClick={()=>setActiveItem('dashboard')}
              color="teal"
            />
            <Menu.Item as={Link} to="/"
              name='logout'
              
              onClick={logout}
              color="orange"
            />
        </Fragment>
    )

    const guestLinks =(
      
      <Fragment>
            <Menu.Item as={Link} to="/profiles"
              name='users'
              active={activeItem === 'users'}
              onClick={()=>setActiveItem('users')}
              color="teal"
            />
            <Menu.Item as={Link} to="/register"
              name='register'
              active={activeItem === 'register'}
              onClick={()=>setActiveItem('register')}
              color="teal"
            />
            
             <Menu.Item as={Link} to="/login"
               name='login'
               active={activeItem === 'login'}
               onClick={()=>setActiveItem('login')}
               color="teal"
             />
      </Fragment>
    )

      return (
        <Segment inverted color="grey">
          <Menu inverted secondary>
            <Menu.Item as={Link} to="/"
              name='home'
              active={activeItem === 'home'}
              onClick={()=>setActiveItem('home')}
              color="teal"
            >
                <Icon name='home' />
            </Menu.Item>
            <Menu.Menu position='right'>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}

            </Menu.Menu>
          </Menu>
        </Segment>
      )
    

};

Navbar.propTypes={
  logout :PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
}

const mapStateToProps = state=>({
  auth : state.auth
})

export default connect(mapStateToProps,{logout})(Navbar);