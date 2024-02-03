import "./Navbar.css"
import myLogo from "../../assets/images/LogoWhite.png"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <div className = "logo" >
            <Link to="/">
            <img src={myLogo} alt="BEST Courses" />
            </Link>
        </div>
        <ul>
            <CustomLink className ="link" to="/application">Aplication</CustomLink>
            <CustomLink className ="link" to="/about">About</CustomLink>
            <CustomLink className ="link" to="/faq">FAQ</CustomLink>
            <CustomLink className ="link" to="/contact">Contact</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{ ...props}>{children}</Link>
        </li>
    )

}