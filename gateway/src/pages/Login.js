import React from 'react'
import { ExtraText, HomeButtonContainer, HomeTitle, LoginButton, LoginFormContainer, LogoContainer, TextInputContainer, TextLink,CopyrightText } from '../components/Styles'
import logo from "../assets/logo.png"

//forms
import {Formik , Form} from "formik"
import  {TextInput}  from '../components/FormLib'
import * as Yup from "yup"

//icons
import {FiMail, FiLock} from "react-icons/fi"

//loader
import {ThreeDots} from "react-loader-spinner"

//connecting the login component to the redux store
import { connect } from 'react-redux'
import { UserLogin } from '../auth/actions/userActions'
//
//on successful sign in we need to navigate to another page so this where  the useHistory hook comes in

import {useNavigate} from 'react-router-dom'

 function Login({UserLogin}) {

  const history = useNavigate();

  return (
    <div>
      <LoginFormContainer>
        <LogoContainer margin={-5} width={10} src={logo}/>
        <HomeTitle bottom={10}>Member Login</HomeTitle>

        <Formik
          initialValues={{
            //to be to make changes in the input fields in formik one needs to initialize the values
            //setIsSubmitting help in saving the form data
                email:"",
                password:""
              }}
              
              validationSchema = {
                //the validationSchema takes a YUP object within which all the rules of validation are
                Yup.object({
                  email: Yup.string()
                    .email("Invalid Email Address")
                    .required("Required"),
                  password: Yup.string()
                    .min(8, "Password too short")
                    .max(30, "Password too long")
                    .required("Required"),
                })
                //once an input component has an error there is need to display the error.

              }
              onSubmit ={(values, {setSubmitting, setFieldError}) => {
                  console.log(values);
                  //on submitting we pass in the values from our form.
                  //the history of collected data
                  //if an error occurs while submitting the form there is need of a way to display it.
                  //we setSubmitting to our login action to tell formik that we have submitted our form 
                  //setFieldError allows us to display the error to the user whenever it occurs on the backend
                  UserLogin(values, history, setFieldError, setSubmitting )
              }}
    
        >
        {/** to be able to submit the form l make use of the isSubmit prop provided by formik which returns boolean values 
         * this prop helps in knowing when to display the loader spinner
        */}
        

          {({isSubmitting}) => (
            //formik tag takes a function as a child and this contains our form.
            //for the formik input we create another file(formLib) to ensure abstraction of our data 
        
            
            <Form>
              <TextInputContainer>
                <TextInput
                  name="email"
                  type="text"
                  label="Email Address"
                  placeholder="steven@example.com"
                  icon={<FiMail/>}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="********"
                  padding={2.5}
                  icon={<FiLock/>}
                />
              </TextInputContainer>
              <HomeButtonContainer>
                {
                  //when we not displaying the form we want to display the login button else display the loader
                  !isSubmitting && (
                  <LoginButton width={6} type='submit'>Login</LoginButton> 
                  )
                }
                {
                  //the loader replaces login button when the user clicks the submit button
                  //the loader takes in four properties namely type, width, color and height
                  isSubmitting && (
                  <ThreeDots
                    type="ThreeDots"
                    color="whitesmoke"
                    radius="20"
                    width={100}
                    height={20}
                    visible={true}
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                   />
                  )
                }
              </HomeButtonContainer>

            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>
        </ExtraText>

      </LoginFormContainer>
      <CopyrightText color="white">All rights reserved &copy;2022</CopyrightText>
    </div>
  )
}
//connecting login component to redux
//connect is a higher order function so we call the connect function which in turn returns another function
export default connect(null, {UserLogin})(Login);