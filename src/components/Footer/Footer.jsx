function Footer(){
    return(
        <footer className="footer py-3 fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-start">
                        <p className='copyright text-light'>
                            &copy; <img src={`${process.env.PUBLIC_URL}/logoNegativo.png`} alt="logo LNE" /> 2024. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="col-md-8 text-end">
                        <ul className="list-unstyled">
                            <li>
                                <a 
                                    className="btn text-light" 
                                    href="https://www.instagram.com/loyalty.clothess" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-instagram"/> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
   
    )
}

export default Footer