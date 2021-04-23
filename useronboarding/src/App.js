import logo from './logo.svg';
import './App.css';
import Form from "./components/form";
import React, {useEffect, useState} from "react";

function App() {

  //Initial State Values

const initialFormValues = {
  //text inputs
  name: '',
  email: '',
  password: '',
  //checkboxes
  termsOfService: false,
}

const initialDisabled = true;

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',
}

const initialUser = [];

  //States

  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


//API Functions

const getUser = () => {


}

const postUser = user => {


}

//eventHandlers

const change = (name, value) => {
  setFormValues({
    ...formValues, [name]: value
  })
}

const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    termsOfService: formValues.termsOfService.trim(),
  }
}

//Side Effects
useEffect(() => {
  
}, [])

useEffect(() => {

}, [])

  return (
    <div className = "container"> 
    <header><h1>User Data Collection App</h1></header>
    <Form 
    values={formValues}
    change={change}
    submit={formSubmit}
    disabled={disabled}
    errors={formErrors}
    />

</div>
  )
}

export default App;
