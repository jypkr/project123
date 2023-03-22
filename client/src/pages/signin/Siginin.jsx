import React, { useState } from 'react'
import './signin.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import Navbar from '../../components/navBar/Navbar';
import Signin from '../../components/signin/Signin'

const Siginin = () => {
  const [listOfUsers, setListOfUsers] = useState({});

  const initialValues = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().min(7).max(21).email("Invalid email format").required(""),
    password: Yup.string().min(6).required("")
  });

  const onSubmit = (data) =>{
    axios.post("http://local:3001/users", data).then((res) => {
      setListOfUsers(res.data);
      console.log("worked");
    });
  };

  return (
    <div className='signinPage'>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
      >
        <Form>
          <label>Username</label>
          <ErrorMessage name="username" component="span"/>
          <Field 
            id="Signin" 
            name="username" 
            placeholder="Ex) abc@gmail.com"
          />
    
          <label>Password</label>
          <ErrorMessage name="password" component="span"/>
          <Field 
            id="Signin" 
            name="password" 
            placeholder="Ex) abcd1234!" 
          />

          <button type="submit">Sign in</button>
        </Form>
      </Formik>
      Sign in
      <Navbar />
      <Signin />
    </div>
  )
}

export default Siginin