import React from 'react'
import { Button, Form, FormContentContainer, Input, Label, RightContentTitle, Table, TBody, TD, TH, THead, TR } from '../components/Styles'

function Sender() {
  
  const [data, setData] = React.useState([
    {user_id: 1, firstName: 'John', lastName: 'Doe',username:'ahmed', national_id: '70-2678969 G71', phone_number: '0783486305'}
  ])

  const [newUser, setNewUser] = React.useState({
    user_id:data.length + 1,
    firstName:'',
    lastName: '',
    username:'',
    national_id: '',
    phone_number: '',
  }) 

  const [isAddingNew, setIsAddingNew] = React.useState(false)

  const onAddNew = () => {
    setIsAddingNew(true)
}

  const onCancel = () => {
    setIsAddingNew(false)
}

  function handleChange(event){
      setNewUser({...newUser, [event.target.name]: event.target.value})
  }

  const onSave = () => {
    setData([...data, newUser]);
    setIsAddingNew(false)
  }

  const today = new Date();

  return (
    <div>
      <RightContentTitle>
          <h2 style={{color: '#004aad'}}>Users</h2>
          <Button onClick={onAddNew}>Add New</Button>
      </RightContentTitle>
      {
        isAddingNew ? (
          <Form >
          <FormContentContainer>
            
            <Label>
              user ID:
            </Label>
            <Input type="number" name="cid" value={newUser.user_id} onChange={handleChange} />
            <br/> 
            
            <Label>
              First Name:
            </Label>
            <Input type="text" name="firstName" value={newUser.firstName} onChange={handleChange} />
            <br/> 

            <Label>
              Last Name:
            </Label>
            <Input type="text" name="lastName" value={newUser.lastName} onChange={handleChange} />
            <br/>

            <Label>
              Username:
            </Label>
            <Input type="text" name="username" value={newUser.username} onChange={handleChange} />
            <br/>
            
            <Label>
              National ID:
            </Label>
            <Input type="text" name="national_id" value={newUser.national_id} onChange={handleChange} />
            <br/>
            
            <Label>
              Phone Number:
            </Label>
            <Input type="text" name="phone_number" value={newUser.phone_number} onChange={handleChange} />
            <br/>
          </FormContentContainer>
          <div style={{display: 'flex', gap:'2rem'}}>
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </div>
        </Form>
      ) : (
        <div>
          <Table>
            <THead>
              <TR>
                <TH>User ID</TH>
                <TH>First Name</TH>
                <TH>Last Name</TH>
                <TH>Username</TH>
                <TH>National ID</TH>
                <TH>Phone Number</TH>
                <TH>Date</TH>
              </TR>
            </THead>
            <TBody>
             { data.map(item => (
                <TR key={item.user_id}>
                  <TD>{item.user_id}</TD>
                  <TD>{item.firstName}</TD>
                  <TD>{item.lastName}</TD>
                  <TD>{item.username}</TD>
                  <TD>{item.national_id}</TD>
                  <TD>{item.phone_number}</TD>
                  <TD>{today.toLocaleDateString()}</TD>
                  </TR>
                )
              )}
            </TBody>
          </Table>
        </div>
      )}

    </div>
  )
}

export default Sender