import styled from "styled-components"
import {Link} from 'react-router-dom'

//Home
export const HomeContainer = styled.div`
  background: rgba(255,155,255,0.15);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  height: 50vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.img`
  width: ${(props) => props.width}rem;
  height:${(props) => props.width}rem;
  margin-top: ${(props) => props.margin}rem;
  padding:0;
  top: 3rem;
  text-align: center;
`
export const HomeTitle = styled.h2`
  font-size: ${(props) => props.size}rem;
  text-align: center;
  color: white;
  margin-top:-15px;
  margin-bottom: ${(props) => props.bottom}px;
`
export const HomeSubTitle = styled.p`
  text-align: center;
  font-size: ${(props) => props.size}rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  margin-bottom: 10px;
`
export const HomeButtonContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  gap: 2rem;
`
export const StyledButton = styled(Link)`
  width: ${(props) => props.width}rem;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  padding: 5px 10px;
  color: white;
  background: linear-gradient(to right, #14005c 0%, #03217b 100%);
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: ease-in-out 1s;
  text-align:center;
  text-decoration: none;
  

  &:hover{
    background: linear-gradient(to right, #005c97, #363795);
  }
`
//login input fields

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.9rem;
  padding-left: 41px;
  padding-right: ${(props) => props.padding}rem;
  font-size: 0.85rem;
  color: black;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;
  background-color: rgba(255,255,255, 0.15);
  border:none;
  outline: none;
  border-radius: 25px;
  display: block;
  &:focus{
    box-shadow 0 0 0 0.2rem #b9abe0;
    color: black;
  }
`
export const StyledLabel = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 13px;

`
export  const TextInputContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255,155,255,0.15);
  backdrop-filter: blur(8.5px);
  border-radius: 20px;
  width: 30vw;
  height: 75vh;
  padding-top: 3rem;
`
export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgba(255,155,255,0.15);
backdrop-filter: blur(8.5px);
border-radius: 20px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
width: 30vw;
height: 75vh;
padding-top: 12rem;
padding-bottom: 2rem;
overflow-y: scroll;

&::-webkit-scrollbar {
  width: 10px;
  padding-left: 10px;
}
&::-webkit-scrollbar-track {
  background-color: rgba(255,155,255,0.15);
  border-radius: 100px;
  margin-right: -10px;
  z-index:-b  1;
}
&::-webkit-scrollbar-thumb {
  border-radius: 50px;
  border: 6px solid rgba(0, 0, 0, 0.18);
  background-color: #03217b;
  z-index: 1;
}
`
export const LoginButton = styled.button`
  width: ${(props) => props.width}rem;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  padding: 5px 10px;
  color: white;
  background: linear-gradient(to right, #14005c 0%, #03217b 100%);
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: ease-in-out 1s;
  text-align:center;
  margin-top: -5px;
  


  &:hover{
    background: linear-gradient(to right, #005c97, #363795);
  }
`
export const ErrorMsg = styled.div`
  font-size: .7rem;
  text-align:left;
  color: red;
  margin-bottom: 5px;
`
export const ExtraText =styled.p`
  font-size: ${(props) => props.size}rem;
  text-align: center;
  font-weight: 550;
  color: #005c97;
  margin-top:1rem;
`
export const TextLink = styled(Link)`
  text-decoration: none;
  color:white;
  transition: ease-in-out 0.4s;
  &:hover{

    text-decoration: underline;
    letter-spacing:1px;
    font-weight: bold;
  }

`
//Icons
export const StyledIcon = styled.p`
  color: black;
  position: absolute;
  font-size: 21px;
  top: 32px;
  ${(props) => props.right && `right: 15px;`}
  ${(props) => !props.right && `left: 15px;`}
  
`
//copyright
export const CopyrightText = styled.p`
  text-align: center;
  color:${(props) => props.color};
  margin-top: 20px;
  
`
//dashboard 

export const DashboardContainer = styled.div`
  background: rgba(255,155,255,0.15);
  backdrop-filter: blur(0.5px);
  border-radius: 10px;
  height: 95vh;
  width: 98vw;
  display: grid;
  gap: 1rem;
  grid-template-columns: 17rem auto;
  padding: 10px 20px;
  
`
//sidebar container
export const SideBarContainer = styled.aside`
  background: rgba(255,255,255,0.28);
  backdrop-filter: blur(0.5px);
  border-radius: 10px;
  height: 90vh;
  padding: 5px;
  
`
export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  padding: 0 10px;

`


export const IconContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor:pointer;
`
export const SidebarIconTitle = styled.p`
  font-size: ${(props) => props.size}rem;
  color: white;
  margin-top: -5px;
  padding:0;
`

export const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  text-align:denter;
  gap:20px;
  padding: 0px 60px;
`
export const SidebarHeading = styled(Link).attrs(
  (props) => props.active
)`
  display:flex;
  gap:2px;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;

  &.active{
    background-color: black;
    padding:10px 50px;
    
  }

  &:hover{
    background-color: blue;
    padding:5px 8px;
    border-radius: 20px;
  }
 
`
export const SideTitle = styled.p`
  font-size: ${(props) => props.size}rem;
  color: white;
`
export const IconStyler = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}rem;
  background: ${(props) => props.backgroundColor};
  border-radius: 50%;
  
  &:hover{
    color: white;
  }
`
export const Icon = ({children, ...props}) => {
  return(
      <IconStyler {...props}>{children}</IconStyler>
  )
}

//Logout
export const LogoutButtonContainer = styled.div`
  margin: 60px 20px 0px 20px;
  padding: 0px 10px;
  position: absolute;
  bottom: 2rem;
`

//Dashboard 
 export const MainContentContainer  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: auto;
 `
 export const MiddleContentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 190px);
  width: 100%;
  justify-content: space-between;
  margin-top: .5rem;
  padding: 0;
`

 export const DateContainer = styled.div`
  max-width: 7rem;
  padding: 5px;
  background: rgba(255,255,255,0.28);
  backdrop-filter: blur(0.5px);
  outline: none;
  border:none;
  border-radius: 15px;
  font-size: 1.2rem;
  color: rgb(0,74,173);
  text-align: center;
  font-family: helvetica, sans-serif;
  font-weight: 700;
 `
 export const RightContentContainer = styled.div`
  background: rgba(255,255,255,0.28);
  backdrop-filter: blur(0.5px);
  border-radius: 10px;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width 100%;
 `
 export const RightContentTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content:space-between;
  margin-bottom: 1rem;
 `
export const ContentCard = styled.div`
  background: rgba(255,255,255,0.28);
  backdrop-filter: blur(0.5px);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:flex-start;
  text-align:center;
  padding: 10px;
  min-height: 5rem;
  max-width: 12rem;
  gap: .5rem;
  
  transition: all .5s ease;

  &:hover{
    box-shadow: none;
  }
`
export const CardTitleContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  
`
export const CardTitle = styled.div`

`
 export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  padding: 0;
  margin: 0;
`;

 export const THead = styled.thead`
  background-color: #ddd;

`;

 export const TH = styled.th`
  border: 1px solid #999;
  padding: 8px 30px;
  text-align: center;

`;

 export const TBody = styled.tbody`

 `;

 export const TR = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

`;

 export const TD = styled.td`
  border: 1px solid #999;
  padding: 8px;
  text-align: center;

`;

  export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  wdith: 100%;
`;

  export const FormContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;  
    gap: 1rem;
  `;
  export const Label = styled.label`
    flex:1 1 20%;
    text-align: left;
    padding-right: 10px;
`;

  export const Input = styled.input`
  flex: 1 1 5%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

  export const Button = styled.button`
  background-color: transparent;
  border: '2px solid #03217b';
  border-radius: 20px;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-family:'Poppins' ,sans-serif;
  font-weight: '900';
  cursor:pointer;
`;
