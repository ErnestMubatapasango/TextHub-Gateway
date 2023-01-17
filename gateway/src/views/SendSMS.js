import React from 'react'
import { Button, Form, FormContentContainer, Input, Label, RightContentTitle, Table, TBody, TD, TH, THead, TR } from '../components/Styles'

function SendSMS() {

  const [ messages, setMessages] = React.useState([
    {messsage_id: 1, phone_number: '0773521700', message: 'Hi mom, how are you?', username: 'Tawanda'}
  ])

  const [isCreatingNew, setIsCreatingNew] = React.useState(false)

  const [newMessage, setNewMessage] = React.useState({
    messsage_id: messages.length + 1,
    phone_number: '',
    message:'',
    username: '',
  })

  const handleChange = (event) => {
        setNewMessage({...newMessage, [event.target.name]: event.target.value}) 
  }
  
  const onAddNew =() => {
    setIsCreatingNew(true)
  }
  
  const onCancel = () => {
    setIsCreatingNew(false)
  }

  const onSave = () => {
    setMessages([...messages, newMessage])
    setIsCreatingNew(false)
  }

  const today = new Date()

  return (
    <div>
      <RightContentTitle>
        <h2 style={{color: '#004aad'}}>Send Single SMS</h2>
        <Button onClick={onAddNew}>Create New</Button>
      </RightContentTitle>

      {
        isCreatingNew ? (
          <Form>
            <FormContentContainer>
              <Label style={{flex:'1 1'}}>Recepients No:</Label>
              <Input style={{flex:'1 1 35%'}} type='number' name='' value={newMessage.phone_number} onChange={handleChange}/>
              <br/>

              <Label style={{flex:'1  1'}}>Username:</Label>
              <Input style={{flex:'1 1 35%'}} type='text' value={newMessage.username} onChange={handleChange}/>
              <br/>

              <Label style={{flex:'1 1'}}>Message:</Label>
              <textarea style={{flex:'1 1 79%', height:'5rem' ,borderRadius: '5px'}} name='' value={newMessage.message} onChange={handleChange}/>
              <br/>

              
            </FormContentContainer>
            <div style={{display: 'flex', gap:'2rem', padding: '10px 0'}}>
              <Button onClick={onCancel}>Cancel</Button>
              <Button  type='submit' onClick={onSave}>Send SMS</Button>
            </div>
          </Form>
        ) : (
          <Table>
            <THead>
              <TR>
                <TH>Recepients No:</TH>
                <TH>Message</TH>
                <TH>Username</TH>
                <TH>Date</TH>
              </TR>  
            </THead>
            <TBody>
              {
                messages.map( message => {
                  return(
                    <TR>
                      <TD>{message.messsage_id}</TD>
                      <TD>{message.phone_number}</TD>
                      <TD>{message.phone_number}</TD>
                      <TD>{today.toLocaleDateString()}</TD>
                    </TR>
                  )
                })
              }
            </TBody>
          </Table>
        )
      }
    </div>
  )
}

export default SendSMS