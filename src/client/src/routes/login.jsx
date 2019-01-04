import React, { Component } from 'react';
import {Grid, Image} from 'semantic-ui-react';

import { graphql } from 'react-apollo';
import queries from '../utils/queries'

import Signin from './login/Signin';
import Signup from './login/Signup';
// import LostPassword from './login/LostPassword';

const style = {
    grid:{
        height:'100%',
        width: '900px',
        margin: '0 auto'
    },
    box:{
        backgroundColor:'white',
        boder:'1px solid #e6e6e6',
        textAlign: 'center',
        marginBottom: '1em',
        padding: '1em'
    }
}

class Login extends Component {
    state = {
        showLogin: true,
        showRegister: false,
        showLostPassword: false,
        argsSignup:{},
        errorsSignup:[]
    }

    showRegister = (e) =>{
        e.preventDefault()
        this.setState({
            showLogin:false,
            showRegister:true,
            showLostPassword:false
        })
    }
    showLogin = (e) =>{
        e.preventDefault()
        this.setState({
            showLogin:true,
            showRegister:false,
            showLostPassword:false
        })
    }
    handleLogin = (e, args) => {
        console.log(args)
    }
    handleRegister = async (e, args) => {
        console.log("Argumentos",args)
        const response = await this.props.mutate({
            variables:args
        })
        console.log("Graphql: ", response)
        
        // Aqui es donde graph guarda los errores tambien

        const {errors, success} = response.data.createUser

        if(!success) this.setState({errorsSignup: errors})
        else this.props.history.push("/");
        
        

    }
    handleChange = (e, input) =>{
        const argsSignup = this.state.argsSignup
        argsSignup[input.name] = input.value
        this.setState({argsSignup})
    }
    render() {
        const {showLogin, showRegister, argsSignup} = this.state;
        return (
            <Grid columns={2} style={style.grid} centered verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column>
                        <Image src="images/phone.png" alt="Phone" fluid/>
                    </Grid.Column>
                    <Grid.Column>
                        {showLogin && <Signin styles={style} handleCLick={this.showRegister} handleSubmit={this.handleLogin} />}
                        {showRegister && 
                            <Signup styles={style} handleCLick={this.showLogin} 
                                handleSubmit={this.handleRegister} handleChange={this.handleChange} 
                                args={argsSignup} errors={this.state.errorsSignup}
                            />
                        }
                        {/* {showLostPassword && <Signup styles={style} />} */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

// const mutation = queries.mutation.createUser
export default graphql(queries.mutation.createUser)(Login);
// export default Login;
