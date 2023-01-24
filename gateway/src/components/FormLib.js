import { useField } from "formik";
import { useState } from "react";
import { StyledLabel, StyledInput, StyledIcon, ErrorMsg} from "./Styles";
import { FiEye,FiEyeOff } from "react-icons/fi";
//using props one can setup a field and meta variable which also save the data in the field

export const TextInput = ({icon,...props}) => {
  const [field, meta] = useField(props);

  const [show, setShow] = useState(false);

  return(
    <div style ={{position: "relative"}}>
      <StyledLabel htmlFor={props.name /**name of the label*/}>
        {props.label}
      </StyledLabel>
      {props.type !== "password" &&
        <StyledInput 
          {...field}
          {...props}
        />
      }
      {props.type === "password" &&
        <StyledInput 
          {...field}
          {...props}
          type={show? "text" : "password"}
        />

      }
      

      {props.type === "password"}
      <StyledIcon>
        {icon}
      </StyledIcon>

      {

        props.type === "password"  &&
        <StyledIcon style={{cursor:"pointer"}} onClick={() => setShow(!show)} right>
          { show && <FiEye/>}
          {!show && <FiEyeOff/>}
        </StyledIcon>
      }
      {
        //to know whether the input field has an error message we use the meta prop
        //so if the input field has been touched and also has an error message we need to display the ErrorMsg 
        //if there is no error msg to be displayed we set the visibility style of our form to hidden so as to maintain the structure of our form
        meta.touched && meta.error ? (
          <ErrorMsg>{meta.error}</ErrorMsg>
        ) : (
          <ErrorMsg style={{visibility: "hidden"}}></ErrorMsg>
        )
      }

    </div>
  )
}
