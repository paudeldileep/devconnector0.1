import React, { Fragment, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { Form, Input, Grid, Button, Header, Icon } from "semantic-ui-react"

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { login } from "../../actions/auth"
import Alert from "../layout/Alert"

const Login = ({ login, isAuthenticated }) => {
  //useState hooks
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    login({ email, password })
  }

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <Header as='h2' icon textAlign='center'>
        <Icon color='teal' name='unlock' circular />
        <Header.Content>Sign In</Header.Content>
      </Header>
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} tablet={10} computer={6}>
              <Alert/>
            <Form
              size='big'
              style={{ margin: "auto" }}
              onSubmit={(e) => onSubmit(e)}
            >
              <Form.Field required>
                <label>Email</label>
                <Input
                  name='email'
                  type='email'
                  placeholder='Provide valid email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <Input
                  name='password'
                  type='password'
                  placeholder='your secret password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Form.Field>
              <Button size='large' color='teal' type='submit'>
                Sign In
              </Button>
            </Form>
            <Header as='h4'>
              <Header.Content>
                <Icon color='orange' name='exclamation' />
                New User ? <Link to='/register'>Sign Up</Link>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
