import React from 'react'
import { Button, Form, Input, FormContentContainer, Label, RightContentTitle, Table, THead, TR, TH, TBody, TD } from '../components/Styles'

function BulkSMS() {
  const [selectedFile, setSelectedFile] = React.useState(null)

  const [bulkMessages, setBulkMessages] = React.useState([
   { time: '', phone_number:'', message: ''}
  ])
   
  const [ isAddingNew, setIsAddingNew] = React.useState(false)

  const onAddNew = () => {
    setIsAddingNew(true)
  }

  const onCancel = () => {
    setIsAddingNew(false)
  }

  const [newMessages, setNewMessages] = React.useState({
    time: '',
    phone_number:'',
    message:''
   })

   const handleChange = (event) => {
      setNewMessages({...newMessages, [event.target.name]: event.target.value })
   }

   const onSave = () => {
    setBulkMessages(...bulkMessages, newMessages)
    setIsAddingNew(false)
   }

  function handleFileChange(event){
    const file = event.target.files[0]
    if(file.type !== 'application/csv'){
      alert('Please select a csv file')
      setSelectedFile(null)
    }
    else{
      setSelectedFile(file)
    }

  }
  return (
    <div>
      <RightContentTitle>
        <h2>Send Bulk SMS</h2>
        <Button onClick={onAddNew}>Upload CSV</Button>
      </RightContentTitle>

      {
        isAddingNew ? (
          <Form>
            <FormContentContainer>
              <Label style={{flex:'1 1'}}>Username:</Label>
              <Input style={{flex:'1 1 5%'}} type='text' name='username' value={handleChange}/>
              <br/>

              <Label style={{flex:'1 1'}}>Password:</Label>
              <Input style={{flex:'1 1 5%'}} type='password' name='password' value={handleChange}/>
              <br/>

              <Label style={{flex:'1 30%'}}>CSV:</Label>
              <>
                <Input type='file' id='file-input' onChange={handleFileChange}/>
                <Button onClick={() => document.getElementById('file-input').click()}>Choose File</Button>
                {selectedFile && <p>{selectedFile.name}</p>}
              </>
              
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
                <TH>Time</TH>
                <TH>Recepient's No</TH>
                <TH>Message</TH>
              </TR>
            </THead>

            <TBody>
              {bulkMessages.map(message => {
                return(
                  <TR>
                    <TD>{message.time}</TD>
                    <TD>{message.phone_number}</TD>
                    <TD>{message.message}</TD>
                  </TR>
                )
              })}
            </TBody>
          </Table>
          
          )
      }
    </div>
  )
}

export default BulkSMS