import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Header, Segment,Label } from "semantic-ui-react"

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <Segment>
      {bio && (
        <Fragment>
          <Header as='h2'>{name.trim().split(' ')[0]}s Bio</Header>
          <p>{bio}</p>
          <hr />
        </Fragment>
      )}


       {skills.map((skill,index)=>(
                <Label key={index} icon='thumbs up' content={skill} />

            ))
            }
    </Segment>
  )
}

ProfileAbout.propTypes = {}

export default ProfileAbout
