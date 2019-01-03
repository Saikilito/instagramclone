import React, { Fragment } from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react';

import { Mutation } from 'react-apollo';
import {ADD_USER} from '../queries'

const Signup = ({styles, handleCLick, handleSubmit}) => {
    const args={}

    const handleChange = (e, input) =>{
        args[input.name] = input.value
    }
    return (
        <Fragment>
            <div style={styles.box}>
                <img src="images/logo.png" alt="Logo"/>
                <h4>Registrate para ver fotos y videos de tus amigos.</h4>
                
                    <Form onSubmit={(e)=>handleSubmit(e,args)}>
                        <Button color="facebook">
                            <Icon name="facebook"/> Iniciar sesión con facebook
                        </Button>
                        <Divider horizontal> O </Divider>
                        <Form.Field>
                            <Form.Input name="email" onChange={handleChange} placeholder="Email" type="email" icon={<Icon name="check circle outline" size="large"  />} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="fullname" onChange={handleChange} placeholder="Nombre completo" icon={<Icon name="check circle outline" size="large"  />} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="username" onChange={handleChange} placeholder="Nombre de usuario" icon={<Icon name="times circle outline" size="large" color="red"  />} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="password" onChange={handleChange} placeholder="Password" type="password" icon={<Icon name="times circle outline" size="large" color="red"  />} />
                        </Form.Field>
                        <Button type="submit" primary fluid>Inicisar Sesión</Button>
                    </Form>
                
            </div>
            <div style={styles.box}>
            ¿YA tienes una cuenta? <a href="" onClick={handleCLick} >Inicia sesión</a>
            </div>
        </Fragment>
    );
}

export default Signup;
