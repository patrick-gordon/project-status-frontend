import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { Container, Button, FormGroup, Input } from "reactstrap";

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const userId = localStorage.userid;

  const toggleMode = (e) => {
    e.preventDefault();
    setEditing(!editing);
    console.log("toggling", editing);
  };

  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then((res) => {
        console.log(res.data);
        setUser({
          ...user,
          username: res.data.user.username,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log("user to update: ", user);
  };

  const updateUser = (e) => {
    console.log("updated creds sent: ", user);
    e.preventDefault();
    axiosWithAuth()
      .put("")
      .then((res) => {
        console.log("response from put request to update user: ", res);
      })
      .catch((err) => {
        console.log(err);
        setUser({
          username: "",
          password: "",
        });
      });
    setEditing(false);
  };

  if (!editing) {
    return (
      <Container>
        <h2>Your Account</h2>
        <Button onClick={toggleMode}>Edit Information</Button>
        <h2>Username: {user.username}</h2>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Edit Account Details</h2>
        <FormGroup>
          <label for="username">
            {" "}
            Username
            <Input
              type="username"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </label>
          <label for="password">
            Password
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>
        </FormGroup>
        <Button type='submit' onClick={updateUser}>Save</Button>
      </Container>
    );
  }
}
