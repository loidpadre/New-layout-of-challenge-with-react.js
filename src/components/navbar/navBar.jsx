import { useState } from "react"
import {FaChevronDown} from "react-icons/fa"
import { NavbarArea } from "./style"
function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    function handleTogle(){
        setIsOpen(!isOpen)
    }
    return(
        <NavbarArea>
            <div className="logoMenu">
                <div className="logo">
                    <h1>snap</h1>
                </div>
                <div className="menu">
                    
                    <button onClick={handleTogle} className="feature">Feature <FaChevronDown size={8}/></button><br />
                    <button>Company <FaChevronDown size={8}/></button>
                    <button>Careers</button>
                    <button>About</button>     
                </div>
            </div>
            <div className="loginRegister">
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
        </NavbarArea>
    )
}
export default Navbar