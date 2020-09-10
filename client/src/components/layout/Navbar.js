import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react'

class Navbar extends React.Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Segment inverted color="grey">
          <Menu inverted secondary>
            <Menu.Item as={Link} to="/"
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              color="teal"
            >
                <Icon name='home' />
            </Menu.Item>
            <Menu.Menu position='right'>
            <Menu.Item as={Link} to="/"
              name='users'
              active={activeItem === 'users'}
              onClick={this.handleItemClick}
              color="teal"
            />
            <Menu.Item as={Link} to="/register"
              name='register'
              active={activeItem === 'register'}
              onClick={this.handleItemClick}
              color="teal"
            />
            
             <Menu.Item as={Link} to="/login"
               name='login'
               active={activeItem === 'login'}
               onClick={this.handleItemClick}
               color="teal"
             />
          </Menu.Menu>
          </Menu>
        </Segment>
      )
    }

}

export default Navbar;