import React from 'react'
import { Button, Form, FormContentContainer, Input, Label, RightContentTitle, Table, TBody, TD, TH, THead, TR } from '../components/Styles'

function Group() {

  const [group, setGroup] = React.useState([
   { group_id: 1, group_name: 'tassberg'}
  ])

  const today = new Date()

  const [ isAddingNew, setIsAddingNew] = React.useState(false)

  const [newGroup, setNewGroup] = React.useState({
    group_id: group.length + 1  ,
    group_name: '',
  })

  const onAddNew = () =>{
    setIsAddingNew(true)
  }

  const onCancel = () => {
    setIsAddingNew(false)
  }

  function handleChange(event){
    setNewGroup({...newGroup, [event.target.name]: event.target.value})
  }

  const onSave = () => {
    setGroup([...group,newGroup ])
    setIsAddingNew(false)
  }

  return (
    <div>
      <RightContentTitle>
        <h2>Groups</h2>
        <Button onClick={onAddNew}>Add New</Button>
      </RightContentTitle>
      {
        isAddingNew ? (
          <Form>
            <FormContentContainer>
              <Label>Group ID:</Label>
              <Input name='group_id' type='number' value={newGroup.group_id} onChange={handleChange}/>
              <br/>
              <Label>Group Name:</Label>
              <Input name='group_username' type='text' value={newGroup.group_name} onChange={handleChange}/>
              <br/>
            </FormContentContainer>
            <div style={{display: 'flex', gap:'2rem'}}>
            <Button onClick={onSave}>Save</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </div>
          </Form>
        ) : (
          <Table>
            <THead>
              <TR>
                <TH>Group ID</TH>
                <TH>Group Name</TH>
                <TH>Date</TH>
              </TR>
            </THead>

            <TBody>
              {
                group.map(item => {
                  return(
                  <TR key={item.group_id}>
                    <TD>{item.group_id}</TD>
                    <TD>{item.group_name}</TD>
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

export default Group