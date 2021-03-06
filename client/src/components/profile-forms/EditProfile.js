import React,{Fragment,useState,useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import{Grid,Form,Header,Icon,Button,Input,TextArea, Segment,Divider} from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import {createProfile,getCurrentProfile} from '../../actions/profile';
import Alert from '../layout/Alert';


const EditProfile = ({profile:{profile,loading},createProfile,getCurrentProfile,history}) => {

    const [formData,setFormData] = useState({
        company:'',
        website:'',
        location:'',
        bio:'',
        status:'',
        githubusername:'',
        skills:'',
        youtube:'',
        facebook:'',
        twitter:'',
        instagram:'',
        linkedin:''

    })

    const [displaySocial,toggleSocial]=useState(false)

    useEffect(()=>{
        getCurrentProfile();
        
            if (!loading && profile) {
                const profileData = { ...formData };
                for (const key in profile) {
                  if (key in profileData) profileData[key] = profile[key];
                }
                for (const key in profile.social) {
                  if (key in profileData) profileData[key] = profile.social[key];
                }
                if (Array.isArray(profileData.skills))
                  profileData.skills = profileData.skills.join(', ');
                setFormData(profileData);
              }
        
    }, [getCurrentProfile])
    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = formData;

    const onSubmit = e =>{
        e.preventDefault();
        createProfile(formData,history,true)
    }

    const handleChange=(e)=>setFormData({...formData,[e.target.name]:e.target.value });



    return (
        <Fragment>
           <Header as='h2' icon textAlign='center'>
                <Icon color="teal" name='user' circular />
                <Header.Content>Edit your Profile</Header.Content>
            </Header>
           <Grid >
               <Grid.Row centered >
                   <Grid.Column mobile={14} tablet={14} computer={12} >
                   <Alert/>
           <Form size="large" style={{'margin':'auto'}} onSubmit={e=>onSubmit(e)} centered>
           <Form.Group widths="equal">
                
           <Form.Field required>
           <label>Status</label>
                    <Input name="status" type="text" placeholder='Your profession' value={status}
                    onChange={e=>handleChange(e)} />
            </Form.Field>
          
                <Form.Field required>
                    <label>Skills</label>
                    <Input name="skills" type="text" placeholder='Your skills comma separated' value={skills}
                    onChange={e=>handleChange(e)} />
                </Form.Field>
            </Form.Group>
                <Form.Group widths="equal">
                <Form.Field>
                    <label>Company</label>
                    <Input name="company" type="text" placeholder='Your company name' value={company}
                    onChange={e=>handleChange(e)} />
                </Form.Field>

                <Form.Field>
                    <label>Website</label>
                    <Input name="website" type="text" placeholder='own/company website' value={website}
                    onChange={e=>handleChange(e)} />
                </Form.Field>

                <Form.Field>
                    <label>Location</label>
                    <Input name="location" type="text" placeholder='city and state' value={location}
                    onChange={e=>handleChange(e)}/>
                </Form.Field>
                </Form.Group>
                <Form.Field
                id='form-textarea-control-opinion'
                name="bio"
                control={TextArea}
                label='Bio'
                placeholder='Describe yourself..'
                value={bio}
                onChange={e=>handleChange(e)}
                />
    <Divider horizontal>--Social Media Links--</Divider>
    <Divider horizontal/>
        <Button onClick={()=>toggleSocial(!displaySocial)} type="button" color="teal">Add Social Media Links?</Button>
        
    <Divider horizontal/>
                { displaySocial && <Fragment>
                    <Fade top>
                    <Segment>
                        <Form.Group widths="equal">
                        <Form.Field inline>
                            <label><Icon name="twitter" color="teal"/></label>
                            <Input type="text" name="twitter" placeholder='Twitter URL' value={twitter}
                    onChange={e=>handleChange(e)}/>
                        </Form.Field>
                        <Form.Field inline>
                            <label><Icon name="facebook official" color="teal"/></label>
                            <Input type="text" name="facebook" placeholder='FB URL' value={facebook}
                    onChange={e=>handleChange(e)}/>
                        </Form.Field>
                        <Form.Field inline>
                            <label><Icon name="instagram" color="teal"/></label>
                            <Input type="text" name="instagram" placeholder='Insta URL' value={instagram}
                    onChange={e=>handleChange(e)}/>
                        </Form.Field>
                        </Form.Group>

                        <Form.Group widths="equal">
                        <Form.Field inline>
                            <label><Icon name="youtube" color="teal"/></label>
                            <Input type="text" name="youtube" placeholder='youtube URL' value={youtube}
                    onChange={e=>handleChange(e)}/>
                        </Form.Field>
                        <Form.Field inline >
                            <label><Icon name="linkedin" color="teal"/></label>
                            <Input type="text" name="linkedin" placeholder='LinkedIn URL' value={linkedin}
                    onChange={(e)=>handleChange(e)}/>
                        </Form.Field>
                        </Form.Group>
                    </Segment>
                    </Fade>
                </Fragment>}
                <Divider horizontal></Divider>
                
                <Button as={Link} to="/dashboard" color="orange" floated="right">I don't want to Edit</Button>
                <Button floated="right" color="teal" type='submit'>Done Editing</Button>
           </Form>  
           
           </Grid.Column>
           </Grid.Row>
           </Grid>
       </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    getCurrentProfile:PropTypes.func.isRequired,
}

const mapStateToProps=state=>({
    profile:state.profile
})


export default connect(mapStateToProps,{createProfile,getCurrentProfile})(withRouter(EditProfile))
