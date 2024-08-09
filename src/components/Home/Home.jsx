import { Link } from "react-router-dom"

function Home(){
    return(
        <div className="container">
            <header className="py-5">
                <div className="card text-bg-dark">
                  <img src={`${process.env.PUBLIC_URL}/images/chicocremera.webp`} 
                  className="card-img" alt="..." style={{
                    maxHeight: '340px', 
                    width: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center'
                  }}/>
                  <div className="card-img-overlay d-flex flex-column justify-content-end align-items-start">
                    <h5 className="card-title">El estilo que buscas</h5>
                    <p className="card-text">Descripcion</p>
                    <Link to='/productos' className="btn btn-light">Ver nuestras remeras</Link>
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

            <section className="py-5">
                <div className="text-start">
                    <h3>Seguinos en redes</h3>
                </div>
              <div className="card mt-3" style={{width: '13rem'}}> 
                <a href="https://www.instagram.com/loyalty.clothess" target="_blank" rel="noreferrer noopener">
                  <div className="mt-3 ms-3 me-3">
                    <img src={`${process.env.PUBLIC_URL}/images/Instagram_logo_2022.png`} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <p className="card-text">@Loyalty.Clothess</p>
                    </div>
                  </div>
                </a>
              </div>
            </section>
        </div>
    )
}

export default Home