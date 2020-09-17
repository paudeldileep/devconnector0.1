import React, { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deleteAccount, getCurrentProfile } from "../../actions/profile"
import LoadingScreen from "../layout/LoadingScreen"
import {
  
  Icon,
  Grid,
  Item,
  Label,
  Segment,
  Button,
} from "semantic-ui-react"
import DashboardActions from "./DashboardActions"
import Experience from "./Experience"
import Education from "./Education"
import Alert from "../layout/Alert"

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  if (loading && profile === null) {
    return <LoadingScreen />
  }
  return (
    <Fragment>
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} tablet={14} computer={13} textAlign='center'>
            <Alert />
            <Item>
              <Item.Image>
                <Icon size='huge' color='teal' name='user' />
              </Item.Image>

              <Item.Content verticalAlign='middle'>
                <Item.Header as='h2' color='orange'>
                  {user && user.name}
                </Item.Header>
                <Item.Meta>
                  <span className='cinema'>Union Square 14</span>
                </Item.Meta>
                <Item.Description>sample paragraph</Item.Description>
                <Item.Extra>
                  {profile !== null ? (
                    <Fragment>
                      <DashboardActions />
                      <Experience experience={profile.experience} />
                      <Education education={profile.education} />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <span>No profile Yet? </span>
                      <Label as={Link} to='/create-profile'>
                        <Icon color='teal' name='user' />
                        Create Profile
                      </Label>
                    </Fragment>
                  )}
                </Item.Extra>
              </Item.Content>
            </Item>
            <Segment centered>
              <Button color='orange' onClick={() => deleteAccount()}>
                <Icon name='user x' />
                Delete Account
              </Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
)
