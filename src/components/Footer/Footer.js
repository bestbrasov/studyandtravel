import "./Footer.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Footer (){
return <footer className="footer">
    <footer className="footerOne">
        <ul>
            <CustomLink to="/application">Aplication</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/faq">FAQ</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </footer>
    <footer className="footerTwo">
        <p>Copyright &copy;{currentYear} Board of European Students of Technology Brașov. Toate drepturile rezervate</p>
    </footer>
</footer>

}


const currentYear = new Date().getFullYear();

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{ ...props}>{children}</Link>
        </li>
    )

}

