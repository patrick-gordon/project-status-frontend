import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Label } from 'reactstrap';
import './AddProject.css'

export default function AddProject() {
  const [project, setProject] = useState('');
  const [errorState, setErrorState] = useState(false);

  const handleChange = (e) => {
    setProject(e.target.value);
  };

  const submit = (e) => {
    axios
      .post('')
      .then((res) => {
        setErrorState(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorState(true);
      });
  };

  const onKeyPress = (e) => {
    if (e.which === 13) {
      submit();
    }
  };
  return (
    <Container
      className='addProject-container'
      style={{ border: '1px solid black' }}
    >
      <Label for='Project Name' sm={3}></Label>
      <input
        placeholder='Project Name'
        onKeyPress={onKeyPress}
        onChange={handleChange}
        type='text'
        id='addProject-nameInput'
        name='new-project-name'
        size='75'
        style={{ height: '2.5rem'}}
      />
      <Button className='addProject-button' outline onClick={submit}>
        ADD
      </Button>
    </Container>
  );
}
