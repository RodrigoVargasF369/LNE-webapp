import { Link } from "react-router-dom";

function NavBar(){
    return(
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand">
              <img src={`${process.env.PUBLIC_URL}/logoNegativo.png`} alt="logo" />
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to='/'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to='/productos'>Productos</Link>
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