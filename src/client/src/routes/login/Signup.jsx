import React, { Fragment } from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react';

const Signup = ({styles, handleCLick}) => {
    return (
        <Fragment>
            <div style={styles.box}>
                <img src="images/logo.png" alt="Logo"/>
                <h4>Registrate para ver fotos y videos de tus amigos.</h4>
                <Form>

                    <Button color="facebook">
                        <Icon name="facebook"/> Iniciar sesión con facebook
                    </Button>
                    <Divider horizontal> O </Divider>
                    <Form.Field>
                        <Form.Input placeholders="Email" icon={<Icon name="check circle outline" size="large"  />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input placeholders="Nombre completo" icon={<Icon name="check circle outline" size="large"  />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="password" placeholders="Password" icon={<Icon name="times circle outline" size="large" color="red"  />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="password" placeholders="Password" icon={<Icon name="times circle outline" size="large" color="red"  />} />
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
