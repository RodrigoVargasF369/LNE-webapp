import { Link } from "react-router-dom";

function NavBar(){
    return(
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand">
              <img src={`${process.env.PUBLIC_URL}/logoNegativo.png`} alt="logo" />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to='/'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/productos'>Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/redes'>Seguinos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar