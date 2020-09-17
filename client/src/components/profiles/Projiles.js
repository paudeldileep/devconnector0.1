import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoadingScreen from '../layout/LoadingScreen';
import {getProfiles} from '../../actions/profile';
import { Divider, Header, Item } from 'semantic-ui-react';
import ProfileItem from './ProfileItem'


const Profiles = ({getProfiles,profile:{profiles,loading}}) =>{

    useEffect(()=>{
        getProfiles();
    },[getProfiles])
    return(

        <Fragment>
            {loading ? <LoadingScreen/> : 
                <Fragment>
                    <Header style={{marginBottom:'10px'}}>Users</Header>
                    <Divider></Divider>
                    <Fragment>
                        <Item.Group divided>
                        {profiles.length >0 ? (
                        
                        profiles.map(profile=>(
                            <ProfileItem key={profile._id} profile={profile}/>
                        ))
                        
                        ): (<Fragment><Header as="h2">No Users found!</Header><span>Sometimes it may take time to load users</span><LoadingScreen/></Fragment>) }
                        </Item.Group>
                    </Fragment>

                </Fragment>
            }
        </Fragment>
    )

}


Profiles.propTypes={
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    profile: state.profile
})

export default connect(mapStateToProps,{getProfiles})(Profiles);


