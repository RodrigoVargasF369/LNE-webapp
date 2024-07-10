import './footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright">&copy; LOGO 2022. All rights reserved</p>
                        <ul className="social-icons">
                            <li>
                                <a href="#" target='_blank' rel='noopener noreferrer'>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank' rel='noopener noreferrer'>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" target='_blank' rel='noopener noreferrer'>
                                    <span>Whatsapp</span>
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