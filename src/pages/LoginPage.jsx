import {Box, Button, Divider, TextField, Typography} from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function LoginPage () {

    const navigate = useNavigate()
    const {login} = useContext(AuthContext)
    const [emailOrPhone,setEmailOrPhone] = useState('')
    const [password,setPassword] = useState('')

    const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        if(emailOrPhone==='qwer' && password === '1234') {
            console.log(login)
            await login()
            navigate('/')
        } else {
            alert('Invalid username or password')
        }
    }

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
            backgroundColor='white'
            borderRadius={1}
            onSubmit={handleSubmitLogin}
            >
                <TextField 
                variant='outlined' 
                size='small' 
                label='Email or Phone number'
                value={emailOrPhone}
                onChange={handleChangeEmailOrPhone}
                />
                <TextField 
                variant='outlined' 
                size='small' 
                type='password'
                label='Password'
                value={password}
                onChange={handleChangePassword}
                />
                <Button type='submit' variant='contained' color='primary'
                >Login</Button>
                <Button type='button' size='small' variant='text' color='primary'>Forgot Password</Button>
                <Divider />
                <Button type='button' variant='contained' color='success'>Create New Account</Button>
            </Box>
        </Box>
        
    </Box>
}

export default LoginPage