import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import {Form, Input, Grid,Button, Header,Icon} from 'semantic-ui-react';
import axios from 'axios';

const Register = () => {

    //useState hooks
    const[formData,setFormData] = useState({
        name:'',
        email:'',
        pass1:'',
        pass2:''
    })

    const{name,email,pass1,pass2}=formData;

    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value});

    const onSubmit=async e=>{
        e.preventDefault();
        if(pass1!==pass2){
            console.log('passwords not matched');
        }else{
            const newUser={
                name,email,password:pass1
            }

            try{
                const config={

                    headers:{
                        'Content-Type':'application/json'
                    }
                }

                const body = JSON.stringify(newUser);

                const res = await axios.post('/api/users',body,config);

                console.log(res.data);

            }catch(err){
                console.error(err.response.data);
            }
        }
    }


    return (
       <Fragment>
           <Header as='h2' icon textAlign='center'>
                <Icon color="teal" name='user' circular />
                <Header.Content>Register to Join</Header.Content>
            </Header>
           <Grid >
               <Grid.Row centered >
                   <Grid.Column mobile={14} tablet={10} computer={6} >
           <Form size="big" style={{'margin':'auto'}} onSubmit={e=>onSubmit(e)}>
                <Form.Field  required >
                    <label >Name</label>
                    <Input name="name" placeholder='Provide full name' value={name} onChange={e=>onChange(e)} required/>
                </Form.Field>
                <Form.Field  required>
                    <label>Email</label>
                    <Input name="email" type="email" placeholder='Provide valid email' value={email} onChange={e=>onChange(e)} required/>
                </Form.Field>
                <Form.Field  required>
                    <label>Password</label>
                    <Input name="pass1" type="password" placeholder='Use a strong password' value={pass1} onChange={e=>onChange(e)} required/>
                </Form.Field>
                <Form.Field  required>
                    <label>Re-Password</label>
                    <Input name="pass2" type="password" placeholder='password again' value={pass2} onChange={e=>onChange(e)} required/>
                </Form.Field>
                <Button size="large" color="teal" type='submit'>Submit</Button>
           </Form>  
           <Header as="h4">
                <Header.Content><Icon color="orange" name='exclamation'/>Already hold an account? <Link to="/login">Sign In</Link></Header.Content>
           </Header> 
           </Grid.Column>
           </Grid.Row>
           </Grid>
       </Fragment>
    )
}

export default Register;
