<Fragment>
            <Segment textAlign="right">
            <Header as="h5">Welcome {user && user.name} <Icon name="user circle"/></Header>
            </Segment>
            {profile !== null ?(
                <Fragment>has profile</Fragment>
                ):(
                    <Fragment>
                        <p>Would you mind creating your profile..?</p>
                        <Button as={Link} to="/create-profile">Create Profile</Button>
                    </Fragment>
                )
            }
        </Fragment>