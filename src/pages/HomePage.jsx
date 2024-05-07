import { Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

function HomePage () {

    const navigate = useNavigate()

    const handleClick = () => {
        //can be coded -- unlike `Link` which is instant redirect
        navigate('/randommmm')
    }
    return <div>
       <h1>Home Page </h1>
       <Link to="/login">Login</Link>
       <Link to="/profile">Profile</Link>

       <Button 
       variant='outlined' 
       onClick={handleClick}>go to 404</Button>
    </div>
}

export default HomePage