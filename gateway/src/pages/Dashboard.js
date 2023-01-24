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
import { Routes, Route} from 'react-router-dom'


import Customer from '../views/Customer';
import Sender from '../views/Sender';
import Group from '../views/Group'
import BulkSMS from '../views/BulkSMS';
import SendSMS from '../views/SendSMS';
import SMSHistory from '../views/SMSHistory';
import Help from '../views/Help'

export default function Dashboard({children}) {


  const today = new Date()

  return (
  
    <DashboardContainer>
      <SideBarContainer>

        <SidebarHeader>
          <LogoContainer  src={logo} width={10}/>
        </SidebarHeader>
        
        <SidebarMain>
           {/*  <SidebarHeading to="/" active==="any">
              <Icon color="#004aad" size={1}>{<MdSpaceDashboard/>}</Icon>
              <SideTitle size={1}>Dashboard</SideTitle>
            </SidebarHeading> */}

            <SidebarHeading to="/dashboard/customer">
              <Icon color="#004aad" size={1}>{<MdOutlineSendToMobile/>}</Icon>
              <SideTitle size={1}>Customers</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/dashboard/group">
              <Icon color="#004aad" size={1}>{<GiWallet/>}</Icon>
              <SideTitle size={1}>Groups</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/dashboard/sendSMS">
              <Icon color="#004aad" size={1}>{<GiWallet/>}</Icon>
              <SideTitle size={1}>Send SMS</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/dashboard/bulkSMS">
              <Icon color="#004aad" size={1}>{<GiWallet/>}</Icon>
              <SideTitle size={1}>Bulk SMS</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/dashboard/smsHistory">
              <Icon color="#004aad" size={1}>{<FiActivity/>}</Icon>
              <SideTitle size={1}>SMS History</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/dashboard/sender">
              <Icon color="#004aad" size={1}>{<AiFillSetting/>}</Icon>
              <SideTitle size={1}>Sender Details</SideTitle>
            </SidebarHeading>

            <SidebarHeading to="/dashboard/help">
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
           
            <Routes>
              <Route path='/customer' element={<Customer/>}></Route>
              <Route path='/group' element={<Group/>}></Route>
              <Route path='/sender' element={<Sender/>}></Route>     
              <Route path='/sendSMS' element={<SendSMS/>}></Route>   
              <Route path='/bulkSMS' element={<BulkSMS/>}></Route>  
              <Route path='/smsHistory' element={<SMSHistory/>}></Route>
              <Route path='/sender' element={<Sender/>}></Route>
              <Route path='/help' element={<Help/>}></Route>
            </Routes>

        </RightContentContainer>

      </MainContentContainer>

      
    </DashboardContainer>

  )
}
