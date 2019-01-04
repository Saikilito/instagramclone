import React, { Fragment } from 'react';
import { Divider, Form, Button, Icon, Message } from 'semantic-ui-react';
import _find from 'lodash/find'

const Signup = ({ styles, handleCLick, handleSubmit, handleChange, args, errors }) => {    
    console.log("Errores",errors)
    return (
        <Fragment>
            <div style={styles.box}>
                <img src="images/logo.png" alt="Logo" />
                <h4>Registrate para ver fotos y videos de tus amigos.</h4>

                <Form
                    onSubmit={e => handleSubmit(e, args)}
                >
                    <Button color="facebook">
                        <Icon name="facebook" /> Iniciar sesión con facebook
                                </Button>
                    <Divider horizontal> O </Divider>
                    <Form.Field>
                        <Form.Input name="email" onChange={handleChange} placeholder="Email" 
                            icon={ !errors.length ? null :  (_find(errors, {path:'email'}))?<Icon name="times circle outline" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="fullname" onChange={handleChange} placeholder="Nombre completo" 
                            icon={ !errors.length ? null : (_find(errors, {path:'fullname'}))?<Icon name="times circle outline" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="username" onChange={handleChange} placeholder="Nombre de usuario" 
                            icon={ !errors.length ? null : (_find(errors, {path:'username'}))?<Icon name="times circle outline" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="password" onChange={handleChange} placeholder="Password" type="password" 
                            icon={ !errors.length ? null : (_find(errors, {path:'password'}))?<Icon name="times circle outline" color="red" size="large" />:<Icon name="check circle outline" color="green" size="large" />}
                        />
                    </Form.Field>
                    <Button
                        type="submit"
                        disabled={!args.email || !args.username || !args.fullname || !args.password}
                        primary
                        fluid
                    >
                        Registrase
            
                    </Button>
                    {
                        errors.length === 0 ?(
                            null
                        ):(
                            <Message negative
                                header="Existen los siguientes errores:"
                                list={errors.map(error=>`${error.message}`)}
                            >
                            </Message>
                        )
                        
                        

                    }


                </Form>


            </div>
        <div style={styles.box}>
            ¿YA tienes una cuenta? <a href="" onClick={handleCLick} >Inicia sesión</a>
        </div>
        </Fragment >
    );
}

export default Signup;