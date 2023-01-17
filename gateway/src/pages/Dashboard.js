import React from 'react'
//logo
import logo from "../assets/logo.png";
import { Icon, LogoContainer, SideBarContainer, SidebarHeader, SidebarMain, SideTitle, SidebarHeading,LogoutButtonContainer,StyledButton, DashboardContainer, MainContentContainer, RightContentContainer,DateContainer, MiddleContentCards, ContentCard, CardTitle, CardTitleContainer, IconStyler} from "../components/Styles";

//icons
import {AiFillSetting} from "react-icons/ai"
import {MdSpaceDashboard, MdOutlineSendToMobile} from "react-icons/md"
import { GiPayMoney, GiReceiveMoney, GiWallet, /* GiPayMoney, GiReceiveMoney, GiTakeMyMoney */} from "react-icons/gi"
import {FiActivity} from "react-icons/fi"
import {BiHelpCircle} from "react-icons/bi"
import {BsFillPersonCheckFill} from 'react-icons/bs'

//navigation
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'






export default function Dashboard() {


  const today = new Date()

  return (
  
    <DashboardContainer>
      <SideBarContainer>

        <SidebarHeader>
          <LogoContainer  src={logo} width={10}/>
        </SidebarHeader>
        
        <SidebarMain>
            <SidebarHeading to="/" activeClassName="any">
              <Icon color="#004aad" size={1}>{<MdSpaceDashboard/>}</Icon>
              <SideTitle size={1}>Dashboard</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/customers" activeClassName="any">
              <Icon color="#004aad" size={1}>{<MdOutlineSendToMobile/>}</Icon>
              <SideTitle size={1}>Customers</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/groups" activeClassName="any">
              <Icon color="#004aad" size={1}>{<GiWallet/>}</Icon>
              <SideTitle size={1}>Groups</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="#" activeClassName="any">
              <Icon color="#004aad" size={1}>{<GiWallet/>}</Icon>
              <SideTitle size={1}>Send SMS</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="#" activeClassName="any">
              <Icon color="#004aad" size={1}>{<GiWallet/>}</Icon>
              <SideTitle size={1}>Bulk SMS</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="#" activeClassName="any">
              <Icon color="#004aad" size={1}>{<FiActivity/>}</Icon>
              <SideTitle size={1}>SMS History</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/sender" activeClassName="any">
              <Icon color="#004aad" size={1}>{<AiFillSetting/>}</Icon>
              <SideTitle size={1}>Sender Details</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="" active="active">
              <Icon color="#004aad" size={1}>{<BiHelpCircle/>}</Icon>
              <SideTitle size={1}>Help</SideTitle>
            </SidebarHeading>
          </SidebarMain>

        <LogoutButtonContainer>
          <StyledButton width={6} to="#">Logout</StyledButton>
        </LogoutButtonContainer> 
      </SideBarContainer> 

      {/**end of side bar content */}

      <MainContentContainer>
        <h1 style={{color: 'lightblue'}}>Dashboard</h1>
        <DateContainer>{today.toLocaleDateString()}</DateContainer>
        <MiddleContentCards>
          <ContentCard>
            <IconStyler color="#004aad" size={2}><GiPayMoney /></IconStyler>
              <CardTitleContainer>
                <CardTitle>
                  <h3 style={{color:"white", fontSize:"15px", fontWeight: "bold"}}>Balance</h3>
                  <h2 style={{color:"#004aad"}}>8000</h2>
                </CardTitle>
              
              </CardTitleContainer>
              
          </ContentCard>
    

        {/**end of deposits card */}

          <ContentCard>
            <Icon color="#004aad" size={2}><GiReceiveMoney/></Icon>
              <CardTitleContainer>
                <CardTitle>
                  <h3 style={{color:"white", fontSize:"15px", fontWeight: "bold"}}>Send SMS's</h3>
                  <h2 style={{color:"#004aad"}}>698</h2>
                </CardTitle>
                
              </CardTitleContainer>
              
          </ContentCard>
    
        {/**end of withdrawals tab */}

          <ContentCard>
            <Icon color="#004aad" size={2}><BsFillPersonCheckFill/></Icon>
              <CardTitleContainer>
                <CardTitle>
                  <h3 style={{color:"white", fontSize:"15px", fontWeight: "bold"}}>Customer No.</h3>
                  <h2 style={{color:"#004aad"}}>208</h2>
                </CardTitle>
                
              </CardTitleContainer>
              
          </ContentCard>
        </MiddleContentCards>

        <RightContentContainer>
        <Customer/>
            <Routes>
              <Route path='/dash' exact component={Dashboard}/>
              <Route path='/dashboard/customer' component={Customer}/>
              <Route path='/dashboard/group' component={Group}/>
              <Route path='/dashboard/sender' component={Sender}/>
              <Route path='/dashboard/bulksms' component={BulkSMS}/>
            </Routes>

        </RightContentContainer>

      </MainContentContainer>

      
    </DashboardContainer>

  )
}
