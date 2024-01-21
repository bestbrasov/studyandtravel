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
            <CustomLink to="/application">Aplication</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/faq">FAQ</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
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