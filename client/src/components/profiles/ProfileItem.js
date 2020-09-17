import React, { Fragment } from "react"
import {Item,Icon,Button,Label} from 'semantic-ui-react'
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return <Fragment>
      <Item>
      <Item.Image src={avatar}  size="tiny" rounded/>

      <Item.Content verticalAlign="middle">
<Item.Header as='h1'>{name}</Item.Header>
        
<Item.Description as="h3">{status} {company && <span>at {company}</span>}</Item.Description>
<Item.Description as="h3">{location && <span> {location}</span>}</Item.Description>
        <Item.Extra>
            {skills.slice(0,4).map((skill,index)=>(
                <Label key={index} icon='thumbs up' content={skill} />

            ))
            }

          <Button as={Link} to={`/profile/${_id}`} primary floated='right'>
                Profile
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Fragment>
}

ProfileItem.propTypes = {

    profile:PropTypes.object.isRequired,
}

export default ProfileItem
