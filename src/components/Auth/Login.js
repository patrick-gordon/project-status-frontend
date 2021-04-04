import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'

import { Container, Button, Input, InputGroup } from 'reactstrap';

export default function Login() {
    let history = useHistory()
    const [creds, setCreds] = useState({username: '', password: ''});
    const [loginStatus, setLoginStatus] = useState('');

    const handleChange = e => {
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    const login = e => {
        e.preventDefault();
        axios
            .post('')
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.user.id)
                setCreds({
                    username: '',
                    password: ''
                })
                history.push('')
            })
            .catch((err) => {
                console.log(err)
                setLoginStatus(`${err}`)
                setCreds({
                    username: '',
                    password: ''
                })
            })
    }
    return (
        <Container>
            <h2>Log in to create and save your projects</h2>
            <InputGroup>
                <Input placeholder='username' onChange={handleChange} type='username' name='username'  />
                <Input placeholder='password' onChange={handleChange} type='password' name='password'  />
            </InputGroup>
            <Button onClick={login}>Login</Button>
            <p><Link to='/register' />Sign up here</p>
            {loginStatus && <p>{loginStatus}</p>}
        </Container>
    )
}
