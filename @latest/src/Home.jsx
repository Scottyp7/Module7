import LoginForm from "./LoginForm"
import { useContext } from "react"
import { UserContext } from "./UserProvider"
import { Link } from "react-router-dom"

export default function Home()
{
    const {currentUser, handleUpdateUser} = useContext(UserContext)


    if(!currentUser.email)
        return(<>
            <LoginForm></LoginForm>
        </>)

    return(
    <>
        <p>Welcome to Bitcoin.com!!</p>
        
        <Link to="/dash">Dashboard</Link><br></br>
        <Link to="/Rates">Rates</Link><br></br>
        <Link to="/About">About</Link><br></br>
        <Link to="/posts">Posts</Link>
    </>
    
    )
}