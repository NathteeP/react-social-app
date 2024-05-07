import { Link } from "react-router-dom"

function LoginPage () {
    return <div>
        LoginPage
        <Link to="/">Home</Link>
       <Link to="/profile">Profile</Link>
    </div>
}

export default LoginPage