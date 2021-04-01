import axios from 'axios'
import React, { useState } from 'react'
import { Container, Button, Input, Label} from 'reactstrap'

export default function addProject() { 
  const [project, setProject] = useState('')  
  const [errorState, setErrorState] = useState(false)

    const handleChange = e => {
        setProject(e.target.value)
    }

    const submit = e => {
        axios
        .post('')
        .then((res) => {

            setErrorState(false)
        })
        .catch((err) => {
            console.log(err)
            setErrorState(true)
        })
    }

    const onKeyPress = e => {
        if (e.which === 13) {
            submit();
        }
    }
    return (
    <Container>
        <Label for='Project Name' sm={3}></Label>
        <Input placeholder='Project Name' onKeyPress={onKeyPress} onChange={handleChange} type='text' id='new-project-name-input' name='new-project-name' />
        <Button outline onClick={submit}>ADD</Button>
    </Container>        
    )
}

