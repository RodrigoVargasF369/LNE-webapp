import { Link } from "react-router-dom";

function NavBar(){
    // return(
    //   <nav className="navbar navbar-expand-lg">
    //     <div className="container-fluid">
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarTogglerDemo01"
    //         aria-controls="navbarTogglerDemo01"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //         <Link to='/' className="navbar-brand">
    //           <img src={`${process.env.PUBLIC_URL}/logoNegativo.png`} alt="logo" />
    //         </Link>
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link text-white" to='/'>Inicio</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link text-white" to='/productos'>Catálogo</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // )

  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">
      <img src={`${process.env.PUBLIC_URL}/logoNegativo.png`} alt="logo" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menú</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/productos">
              Catálogo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

  );
}

export default NavBar