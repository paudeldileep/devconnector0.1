import React, { Fragment } from 'react'
import {Placeholder,Grid} from 'semantic-ui-react'

const LoadingScreen =()=>{

    return(
        <Fragment>
            <Grid>
            <Grid.Row centered>
            <Grid.Column mobile={14} tablet={14} computer={10} textAlign="center">
            <Placeholder style={{ height: 150, width: 150,margin:'auto' }}>
                <Placeholder.Image />
            </Placeholder>
                <Placeholder fluid>
                
                    <Placeholder.Header>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    </Placeholder.Paragraph>
                    <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
                </Grid.Column>
                </Grid.Row>
                </Grid>
        </Fragment>
    )
}

export default LoadingScreen