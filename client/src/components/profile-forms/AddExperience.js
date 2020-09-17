import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addExperience } from "../../actions/profile"
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


const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  })

  const { title, company, location, from, to, current, description } = formData

  const onSubmit = (e) => {
    e.preventDefault()
    addExperience(formData, history)
  }

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <Fragment>
      <Header as='h2' icon textAlign='center'>
        <Icon color='teal' name='address card' circular />
        <Header.Content>Add Experience</Header.Content>
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
                  <label>Title</label>
                  <Input
                    name='title'
                    type='text'
                    placeholder='What are you?'
                    required
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field required>
                  <label>Company</label>
                  <Input
                    name='company'
                    type='text'
                    placeholder='Your company name'
                    required
                    value={company}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Location</label>
                  <Input
                    name='location'
                    type='text'
                    placeholder='city and state'
                    value={location}
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
                placeholder='Describe the role'
                value={description}
                onChange={(e) => handleChange(e)}
              />

              <Divider horizontal></Divider>
              <Button as={Link} to='/dashboard' color='orange' floated='right'>
                Go Back
              </Button>
              <Button floated='right' color='teal' type='submit'>
                Add Exp
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(AddExperience)
