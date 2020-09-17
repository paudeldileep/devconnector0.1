import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Button, Table,Header,Divider } from "semantic-ui-react"
import Moment from "react-moment"
import {deleteExperience} from '../../actions/profile'
import {connect} from 'react-redux'

const Experience = ({ experience,deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <Table.Row key={exp._id}>
      <Table.Cell>{exp.company}</Table.Cell>
      <Table.Cell>{exp.title}</Table.Cell>
      <Table.Cell>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </Table.Cell>
      <Table.Cell>
        <Button color='orange' type="button" onClick={()=>deleteExperience(exp._id)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  ))

  return (
    <Fragment>
      
            <Header as='h3' color='teal' textAlign='left'>
              Experiences
            </Header>
            <Table color='teal' striped unstackable textAlign="center">
              
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Years</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>{experiences}</Table.Body>
             
            </Table>
          
      <Divider horizontal>------- -------</Divider>
    </Fragment>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
}

export default connect(null,{deleteExperience})(Experience)
