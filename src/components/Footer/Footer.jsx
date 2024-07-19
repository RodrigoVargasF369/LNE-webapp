function Footer(){
    return(
        <footer className="footer mt-auto py-3 fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-start">
                        <p className='copyright'>&copy; <img src={`${process.env.PUBLIC_URL}/logoNegativo.png`} alt="logoLNE"></img> 2024. Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-8 text-end">
                        <ul className="list-unstyled">
                            <li>
                            <a className="btn text-light position-absolute top-50 translate-middle" href="https://www.instagram.com/loyalty.clothess" target="_blank" rel="noreferrer noopener"><i className="bi bi-instagram"/> Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer