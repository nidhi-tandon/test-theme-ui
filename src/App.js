import React from 'react'
import {Box, Heading, Text, Button} from 'theme-ui'
import {DummyForm, FormInput} from './DummyForm';

function App() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const handleChangeName = (event) => setName(event.target.value)
  const handleChangeEmail = (event) => setEmail(event.target.value)
  
  return (
    <Box bg="background.200" sx={{width: "540px", margin: "auto", padding: "12px"}}>
      <Heading fontSize="16" marginTop="12px">Thirdwatch</Heading>
      <Text fontSize="md" marginTop="12px">
          Share your details with us and we will get back to you.
      </Text>
      <Text marginTop="12px">Your Name</Text>
      <DummyForm marginTop="12px">
        <FormInput placeholder="Full Name" required="" value={name} onChange={handleChangeName}/>
        <FormInput placeholder="Email" required="" value={email} onChange={handleChangeEmail}/>
      </DummyForm>
      <Button backgroundColor="background.pink.800" color="color.200" marginTop="12px">
        Submit Details
      </Button>
    </Box>
  );
}

export default App;
