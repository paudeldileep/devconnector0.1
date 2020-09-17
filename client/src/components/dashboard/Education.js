import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Button, Table,Header,Divider } from "semantic-ui-react"
import Moment from "react-moment"
import { deleteEducation } from "../../actions/profile"
import { connect } from "react-redux"


const Education = ({ education,deleteEducation }) => {
  const educations = education.map((edu) => (
    <Table.Row key={edu._id}>
      <Table.Cell>{edu.school}</Table.Cell>
      <Table.Cell>{edu.degree}</Table.Cell>
      <Table.Cell>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -
        {edu.to === null ? (
          "Now"
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </Table.Cell>
      <Table.Cell>
        <Button color='orange' onClick={()=>deleteEducation(edu._id)}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  ))

  return (
    <Fragment>
      
            <Header as='h3' color='teal' textAlign='left'>
              Education
            </Header>
            <Table color='teal' striped unstackable textAlign="center">
              
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>School</Table.HeaderCell>
                    <Table.HeaderCell>Degree</Table.HeaderCell>
                    <Table.HeaderCell>Years</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>{educations}</Table.Body>
              </Table>
            
          
      <Divider horizontal>------- -------</Divider>
    </Fragment>
  )
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
}

export default connect(null,{deleteEducation})(Education)
