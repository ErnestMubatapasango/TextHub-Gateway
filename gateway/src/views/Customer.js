import React, {useState} from 'react';
import  {Table, THead, TR, TH, TBody, TD, RightContentTitle, Label, Input, Button, Form} from "../components/Styles";

function Customer() {

  
  const [data, setData] = useState([
    { cid: 1, name: 'John', host: 'example.com', username: 'johndoe' },
    { cid: 2, name: 'Jane', host: 'example.com', username: 'janedoe' },
    // ...
  ]);

  const [newCustomer, setNewCustomer] = useState({
    cid: data.length + 1,
    name:'',
    host:'',
    username:'',
  })

  const [isAddingNew, setIsAddingNew] = useState(false)
  
  const onAddNew  = () => {
    setIsAddingNew(true)
  }

  const onCancel = () => {
    setIsAddingNew(false)
  }
  
  function handleChange(event){
    
    setNewCustomer({...newCustomer, [event.target.name]: event.target.value})
  }

  const onSave = (event) => {
    event.preventDefault();
    setData([...data, newCustomer]);
    setIsAddingNew(false)
  }

  const today = new Date()

  return (
    <div>
        <RightContentTitle>
            <h2 style={{color: 'r#004aad'}}>Customer Manager</h2>
            <Button onClick={onAddNew}>Add New</Button>
        </RightContentTitle>
          
             
      {isAddingNew ? (
        <Form >
          <div>
            
            <Label>
              CID:
            </Label>
            <Input type="number" name="cid" value={newCustomer.cid} onChange={handleChange} />
            <br/> 
            
            <Label>
              Customer Name:
            </Label>
            <Input type="text" name="name" value={newCustomer.name} onChange={handleChange} />
            <br/> 

            <Label>
              Host:
            </Label>
            <Input type="text" name="host" value={newCustomer.host} onChange={handleChange} />
            <br/>
            <Label>
              Username:
            </Label>
            <Input type="text" name="username" value={newCustomer.username} onChange={handleChange} />
            <br/>
          </div>
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
                <TH>CID</TH>
                <TH>Cust Name</TH>
                <TH>Host</TH>
                <TH>Username</TH>
                <TH>Date</TH>
              </TR>
            </THead>
            <TBody>
             { data.map(item => (
                <TR key={item.cid}>
                  <TD>{item.cid}</TD>
                  <TD>{item.name}</TD>
                  <TD>{item.host}</TD>
                  <TD>{item.username}</TD>
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

export default Customer