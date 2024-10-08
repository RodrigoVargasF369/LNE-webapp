import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <header className="">
                <div className="card border-0 rounded-0">
                  <img src={`${process.env.PUBLIC_URL}/images/banner_loyalty(1920×600).png`} 
                  className="card-img rounded-0" alt="..." style={{
                    width: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center'
                  }}/>
                  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start">
                    {/* <h5 className="card-title text-dark">Elegí tu propio estilo</h5> */}
                    {/* <p className="card-text text-dark">Descripcion</p> */}
                    <Link to='/productos' className="btn btn-light mt-3">Ver remeras <i className="bi bi-box-arrow-up-right"></i></Link>
                  </div>
                </div>
            </header>

            {/* <section className="py-5">
                <h2 className="text-start">Lo que buscás</h2>
                <p className="text-start">Remeras, Pantalones, Medias y más</p>

                <div className="row mt-4">
                    <div className="col md-4 mb-4">
                        <div className="card h-100">
                            <img src="..." alt="..." className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Remeras</h5>
                                <p className="card-text">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4 mb-4">
                        <div className="card h-100">
                            <img src="..." alt="..." className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Pantalones</h5>
                                <p className="card-text">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4 mb-4">
                        <div className="card h-100">
                            <img src="..." alt="..." className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Medias</h5>
                                <p className="card-text">...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4 mb-4">
                        <div className="card h-100">
                            <img src="..." alt="..." className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Otros</h5>
                                <p className="card-text">...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="container mt-5">
                <Link to='/productos'>
                <div className="row g-5">
                    <div className="col-1 col-md-3">
                        <img src={`${process.env.PUBLIC_URL}/images/diseno_2.png`}  alt="remera_diseno_2" 
                        style={{maxHeight: '480px'}}/>
                    </div>
                    <div className="col-1 col-md-3">
                        <img src={`${process.env.PUBLIC_URL}/images/diseno_3.png`}  alt="remera_diseno_3" 
                        style={{maxHeight: '500px'}}/>
                    </div>
                    <div className="col-1 col-md-3">
                        <img src={`${process.env.PUBLIC_URL}/images/diseno_1.png`}  alt="remera_diseno_1" 
                        style={{maxHeight: '480px'}}/>
                    </div>
                </div>
                </Link>
            </section>

            <section className="py-5 ms-3 fixed-bottom">
                <div className="container">
                    <div className="row justify-content-end me-3">
                        <div className="col-1"><a href="https://www.instagram.com/loyalty.clothess" target="_blank" rel="noreferrer noopener"><i className="bi bi-instagram text-dark"></i></a></div>
                        <div className="col-1"><a href="https://www.tiktok.com/@loyaltycordoba" target="_blank" rel="noreferrer noopener"><i className="bi bi-tiktok text-dark"></i></a></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
