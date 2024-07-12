import './footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    
                        <p className="copyright">&copy; <img src={`${process.env.PUBLIC_URL}/logoNegativo.png`}></img> 2024. All rights reserved</p>
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
        </footer>
    )
}

export default Footer