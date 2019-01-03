import React, { Component } from 'react';
import {Grid, Image} from 'semantic-ui-react';

import Signin from './login/Signin';
import Signup from './login/Signup';
import LostPassword from './login/LostPassword';


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
    render() {
        const {showLogin, showRegister, showLostPassword} = this.state;
        return (
            <Grid columns={2} style={style.grid} centered verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column>
                        <Image src="images/phone.png" alt="Phone" fluid/>
                    </Grid.Column>
                    <Grid.Column>
                        {showLogin && <Signin styles={style} handleCLick={this.showRegister} handleSubmit={this.handleLogin} />}
                        {showRegister && <Signup styles={style} handleCLick={this.showLogin} />}
                        {/* {showLostPassword && <Signup styles={style} />} */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Login;
