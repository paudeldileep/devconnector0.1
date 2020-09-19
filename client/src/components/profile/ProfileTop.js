import React from 'react';
import PropTypes from 'prop-types';
import { Segment,Item,Icon } from 'semantic-ui-react';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <Segment textAlign="center">

      <Item>
      <Item.Image src={avatar}  size="small" rounded/>

      <Item.Content >
<Item.Header as='h1'>{name}</Item.Header>
        
<Item.Description as="h3">{status} {company && <span>at {company}</span>}</Item.Description>
<Item.Description as="h3">{location && <span> {location}</span>}</Item.Description>
      </Item.Content>
    </Item>
      <div>
        {website && (
          <a href={website} target='_blank' rel='noopener noreferrer'>
            
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <Icon name="user" />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <Icon name="user" />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <Icon name="user" />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <Icon name="user" />
          </a>
        )}
      </div>
      </Segment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;