import React, { useState } from 'react'
import './signin.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Navbar from '../../components/navBar/Navbar';


const Signin = () => {
  const [listOfUsers, setListOfUsers] = useState({});

  const initialValues = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().min(7).max(21).email("Invalid email format").required(""),
    password: Yup.string().min(6).required("")
  });

  return (
    <div className='signinPage'>
      Sign in
      <Formik 
        initialValues={initialValues} 
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

export default Signin