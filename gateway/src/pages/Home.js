//logo
import logo from "../assets/logo.png"

import { HomeButtonContainer, HomeContainer, HomeSubTitle, HomeTitle, LogoContainer, StyledButton } from "../components/Styles";

export default function Home() {
  return (
    
    <HomeContainer>
      <LogoContainer  src={logo} width={10} />
      <HomeTitle size={1.7}>Welcome to TextHub</HomeTitle>
      <HomeSubTitle>The SMS Gateway of Choice</HomeSubTitle>
      <HomeButtonContainer>
        <StyledButton width={6} to="/login">Login</StyledButton>
        <StyledButton width={6} to="/signup">Signup</StyledButton>
      </HomeButtonContainer>
    </HomeContainer>
  )
}
