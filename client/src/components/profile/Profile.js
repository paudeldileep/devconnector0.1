import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getProfileById } from "../../actions/profile"
import LoadingScreen from "../layout/LoadingScreen"
import { Button } from "semantic-ui-react"
import ProfileTop from "./ProfileTop"

const Profile = ({
  match,
  getProfileById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getProfileById(match.params.id)
  }, [getProfileById])

  return (
    <Fragment>
      {profile === null || loading ? (
        <LoadingScreen />
      ) : (
        <Fragment>
          <Button as={Link} to='/profiles' color='teal'>
            Back to Profiles
          </Button>

          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Button as={Link} to='/edit-profile' color='teal'>
                Edit Profile
              </Button>
            )}

            <ProfileTop profile={profile}/>
        </Fragment>
      )}
    </Fragment>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getProfileById })(Profile)
