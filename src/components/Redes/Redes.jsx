
function Redes(){
    return(
        <div className="container-fluid ">
            <div className="card mt-3 mb-3" style={{maxWidth: '540px'}}>
              <div className="row g-0">
                <div className="col md-8">
                  <div className="card-body">
                    <h5 className="card-title">En Instagram</h5>
                    <p className="card-text">Seguinos como @Loyalty.Clothess</p>
                    <p className="card-text"><small className="text-body-secondary">No olvides compartirnos!</small></p>
                  </div>
                </div>
                <div className="col md-4">
                  <img src={`${process.env.PUBLIC_URL}/images/Instagram_logo_2022.png`} className="img-fluid h-75" alt="..."/>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Redes