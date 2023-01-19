import React from 'react'
import { ExtraText, HomeButtonContainer, HomeTitle, LoginButton, LogoContainer, TextInputContainer, TextLink,CopyrightText, SignUpContainer } from '../components/Styles'
import logo from "../assets/logo.png"

//forms
import {Formik , Form} from "formik"
import  {TextInput}  from '../components/FormLib'
import * as Yup from "yup"

//icons
import {FiMail, FiLock, FiUser} from "react-icons/fi"
import {HiOutlineIdentification} from "react-icons/hi"

//loader
import {ThreeDots} from "react-loader-spinner"

//connecting the sign up form to redux
import {connect} from "react-redux"
import { UserSignin } from '../auth/actions/userActions'
import { useNavigate } from 'react-router-dom'

 function Signup() {

  const history = useNavigate();

  return (
    <div>
      <SignUpContainer>
        <LogoContainer margin={3.5} width={7} src={logo}/>
        <HomeTitle bottom={10} size={1.2}> User SignUp</HomeTitle>

        <Formik
          initialValues={{
            //to be to make changes in the input fields in formik one needs to initialize the values
            //setIsSubmitting help in saving the form data
                firstName: "",
                lastName: "",
                national_ID: "",
                email:"",
                password:"",
                confirmPassword:""
              }}
              
              validationSchema = {
                //the validationSchema takes a YUP object within which all the rules of validation are
                Yup.object({
                  firstName: Yup.string()
                    .required("Required"),
                  lastName: Yup.string()
                    .required("Required"),
                    national_ID: Yup.string()
                    .min(14, "ID number too short")
                    .required("Required"),
                  email : Yup.string()
                    .email("Invalid Email Address")
                    .required("Required"),
                  password: Yup.string()
                    .min(8, "Password too short")
                    .max(30, "Password too long")
                    .required("Required"),
                    //for us to confirm the password we make use of the oneOf prop provided by formik which take a reference array of the original password 
                  confirmPassword: Yup.string()
                  .required("Required").oneOf([Yup.ref("password")],"Passwords must match")
                })
                //once an input component has an error there is need to display the error.

              }
              onSubmit ={(values, {setSubmitting, setFieldError}) => {
                  console.log(values);
                  UserSignin(values, history, setFieldError, setSubmitting)
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
                  name="firstName"
                  type="text"
                  label="First Name"
                  placeholder="Tawanda"
                  padding={2.5}
                  icon={<FiUser/>}
                />
                <TextInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Mubatapasango"
                  padding={2.5}
                  icon={<FiUser/>}
                />
                <TextInput
                  name="national_ID"
                  type="text"
                  label="National ID"
                  placeholder="70-2021578G71"
                  padding={2.5}
                  icon={<HiOutlineIdentification/>}
                />
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
                 <TextInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
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
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </SignUpContainer>
      <CopyrightText color="white">All rights reserved &copy;2022</CopyrightText>
    </div>
  )
}

export default connect(null, {UserSignin})(Signup);