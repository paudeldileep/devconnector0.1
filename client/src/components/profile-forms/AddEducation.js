import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addEducation } from "../../actions/profile"
import {
  Grid,
  Header,
  Form,
  Icon,
  Input,
  Divider,
  Button,
  Checkbox,
  TextArea,
} from "semantic-ui-react"


const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  })

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData

  const onSubmit = (e) => {
    e.preventDefault()
    addEducation(formData, history)
  }

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <Fragment>
      <Header as='h2' icon textAlign='center'>
        <Icon color='teal' name='graduation cap' circular />
        <Header.Content>Add Education</Header.Content>
      </Header>
      <Grid>
        <Grid.Row centered>
          <Grid.Column mobile={14} tablet={14} computer={12}>
            <Form
              size='large'
              style={{ margin: "auto" }}
              onSubmit={(e) => onSubmit(e)}
              centered
            >
              <Form.Group widths='equal'>
                <Form.Field required>
                  <label>Degree</label>
                  <Input
                    name='degree'
                    type='text'
                    placeholder='What are you?'
                    required
                    value={degree}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field required>
                  <label>School</label>
                  <Input
                    name='school'
                    type='text'
                    placeholder='Your school name'
                    required
                    value={school}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Field>

                <Form.Field required>
                  <label>Field of Study</label>
                  <Input
                    name='fieldofstudy'
                    type='text'
                    placeholder='What did you study'
                    value={fieldofstudy}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group widths='equal'>
                <Form.Field required>
                  <label>From</label>
                  <Input
                    name='from'
                    type='date'
                    value={from}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </Form.Field>

                <Form.Field>
                  <label>To</label>
                  <Input
                    name='to'
                    type='date'
                    value={to}
                    onChange={(e) => handleChange(e)}
                    disabled={current ? "disabled" : ""}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label='Current'
                    checked={current}
                    value={current}
                    onChange={() => {
                      setFormData({ ...formData, current: !current })
                    }}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field
                id='form-textarea-control-description'
                name='description'
                control={TextArea}
                label='description'
                placeholder='Describe the subject'
                value={description}
                onChange={(e) => handleChange(e)}
              />

              <Divider horizontal></Divider>
              <Button as={Link} to='/dashboard' color='orange' floated='right'>
                Go Back
              </Button>
              <Button floated='right' color='teal' type='submit'>
                Add Edu
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation)
