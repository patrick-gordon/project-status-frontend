import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'

import { Container, Button, Input, InputGroup } from 'reactstrap';
import './Register.css'

export default function Register() {
    let history = useHistory()
    const [newCreds, setNewCreds] = useState({username: '', password: ''});
    const [signupStatus, setSignupStatus] = useState('');

    const handleChange = e => {
        setNewCreds({...newCreds, [e.target.name]: e.target.value})
    }

    const register = e => {
        e.preventDefault();
        axios
            .post('')
            .then((res) => {
                console.log(res.data);
                setNewCreds({
                    username: '',
                    password: ''
                })
                history.push('')
            })
            .catch((err) => {
                console.log(err)
                setSignupStatus(`${err}`)
            })
    }
    return (
        <Container className='register-container'>
            <h2>Sign up to create and save your projects</h2>
            <InputGroup className='register-inputgroup'>
                <Input placeholder='username' onChange={handleChange} type='username' name='username'  />
                <Input placeholder='password' onChange={handleChange} type='password' name='password'  />
            </InputGroup>
            <Button className='register-button' onClick={register}>Login</Button>
            <p><Link to='/register'>Sign up here</Link></p>
            {signupStatus && <p>{signupStatus}</p>}
        </Container>
    )
}
