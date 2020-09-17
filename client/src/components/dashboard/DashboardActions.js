import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Label,Icon} from 'semantic-ui-react'

const DashboardActions = () => {
    return (
        <Fragment>
                    <Label as={Link} to="/edit-profile"><Icon color="teal" name="user plus"/>Edit Profile</Label>
                    <Label as={Link} to="/add-experience"><Icon color="teal" name="address card"/>Add Experience</Label>
                    <Label as={Link} to="/add-education"><Icon color="teal" name="graduation cap"/>Add Education</Label>
        </Fragment>
    )
}

export default DashboardActions
