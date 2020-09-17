import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { Message,Divider } from 'semantic-ui-react'

import Slide from 'react-reveal/Slide';


const Alert = ({alerts}) => 
    alerts !== null && alerts.length > 0 && alerts.map(alert =>(
        
        <Slide left>  
            <div key={alert.id} mobile={14} tablet={10} computer={6}>
                <Message color={`${alert.alertType}`}>{alert.msg}</Message>
                <Divider hidden />
            </div>
        </Slide>
       
            
    ))

Alert.propTypes = {
    alerts:PropTypes.array.isRequired
}

const mapStateToProps = state =>({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
