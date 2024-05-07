import {Box, Button, Divider, TextField, Typography} from '@mui/material'

function LoginPage () {
    return <Box 
    component='main'
    display='flex'
    justifyContent='center'
    height='100vh'>
        <Box
        component='section'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        p='20px'
        flex={1}
        sx={{
            display: {xs:'none', sm:'flex'}
        }}>
        
            <Typography variant='h3' color='#4D8ED3' fontWeight={600}>FakeBug</Typography>
            <Typography>Connect nothing around here.</Typography>
        </Box>
        <Box
        component='section'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        p='20px'
        flex={1}>
            <Box component='form'
            display='flex'
            flexDirection='column'
            gap='12px'
            padding='16px'
            backgorundColor='white'
            borderRadius={1}>
                <TextField variant='outlined' size='small' label='Email or Phone number'/>
                <TextField variant='outlined' size='small' label='Password'/>
                <Button type='submit' variant='contained' color='primary'>Login</Button>
                <Button type='button' size='small' variant='text' color='primary'>Forgot Password</Button>
                <Divider />
                <Button type='button' variant='contained' color='success'>Create New Account</Button>
            </Box>
        </Box>
        
    </Box>
}

export default LoginPage