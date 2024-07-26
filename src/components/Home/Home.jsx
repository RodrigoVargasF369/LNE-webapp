import { Link } from "react-router-dom"

function Home(){
    return(
        <div className="container">
            <header className="py-5">
                <h1 className="text-start">The style you want</h1>
                <p className="text-start">Descripcion</p>
                <div className="text-start">
                    <Link to='/productos' className="btn btn-light">Shop Now</Link>
                </div>
            </header>

            <section className="py-5">
                <h2 className="text-start">What you looking for</h2>
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
            </section>

            <section className="py-5">
                <h2 className="text-start">Follow us in</h2>
                <div className="row mt-4">
                    <div className="col md-4 mb-4">
                        <div className="card h-100">
                            <a href="https://www.instagram.com/loyalty.clothess" target="_blank" rel="noreferrer noopener">
                                <img src="..." alt="..." className="card-img-top" />
                            </a>
                            <p>@Loyalty.Clothess</p>
                        </div>
                    </div>
                    <div className="col md-4 mb-4">
                        <div className="card h-100">
                            <img src="..." alt="..." className="card-img-top" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home