import React from 'react'
import { Button, Container, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
    <Grid textAlign='center' style={{ overflow: 'hidden', height: '100vh' }}>
        <Grid.Column style={{ maxWidth: 450, paddingTop: '30%' }}>
            <Container style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px'}}>
                <Header as='h2' color='blue' textAlign='center'>
                    <Image src='/adam.png' /> Log-in to your account
                
                </Header>

                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button disabled color='blue' fluid size='large'>
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>

                    New here?&nbsp;&nbsp; <a href="mailto:adam@adamdaum.com?subject=adamdaum.com Login Request&body=I'd like a login to adamdaum.com to see some of your projects.">Request A Login</a>
                </Message>

            </Container>

        </Grid.Column>
    </Grid>
)

export default LoginForm