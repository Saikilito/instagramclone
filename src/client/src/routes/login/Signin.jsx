import React, { Fragment } from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react';

const Signin = ({styles, handleCLick, handleSubmit}) => {
    const args={}

    const handleChange = (e, input) =>{
        args[input.name] = input.value
    }
    return (
        <Fragment>  
            <div style={styles.box}>
                <img src="images/logo.png" alt="Logo"/>
                <Form onSubmit={(e)=> handleSubmit(e,args) }>
                    <Form.Field>
                        <Form.Input name="email" onChange={handleChange} placeholder="Email o Nombre de usuario" icon={<Icon name="check circle outline" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="password" onChange={handleChange} type="password" placeholder="Contraseña" icon={<Icon name="times circle outline" size="large" color="red"  />} />
                    </Form.Field>
                    <Button type="submit" primary fluid>Inicisar Sesión</Button>
                    <Divider horizontal> O </Divider>
                    <Button color="facebook">
                        <Icon name="facebook"/> Iniciar sesión con facebook
                    </Button>
                </Form>
            </div>
            <div style={styles.box}>
                ¿No tienes una cuenta? <a href="" onClick={handleCLick} >Registrate</a>
            </div>
        </Fragment>
    );
}

export default Signin;
