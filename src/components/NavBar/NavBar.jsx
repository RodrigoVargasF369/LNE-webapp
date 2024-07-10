import { Link } from "react-router-dom";
import './navbar.css'

function NavBar(){
    return(
        <nav className="navbar">
            <div className="container">
                <Link to='/' className="logo">logo</Link>
                <ul className="nav-links">
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/productos'>Productos</Link>
                    </li>
                    <li>
                        <Link to='/redes'>Redes Sociales</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar