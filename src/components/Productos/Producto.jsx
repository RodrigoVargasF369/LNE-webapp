import { useParams, Link } from 'react-router-dom'
import prendas from '../../resources/prendas.json'

function Producto(){
    const { id } = useParams();
    const producto = prendas.find(p => p.Id === parseInt(id));
  
    if (!producto) {
      return( 
        <div className='container mt-5 text-center'>
          
          <h1 >No existe el producto solicitado</h1>
          <Link to='/productos'>Volver</Link>
        </div>)
    }
  
    return(
      <div className="container">
        <div className="card mb-3 mt-3">
          <div className="row g-0">

            <div className="col-md-8">
              {/* <img src={producto.Imagen} alt={producto.Nombre} className="img-fluid" /> */}
            <div id="carouselExample" className="carousel slide mt-3 mb-3">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={producto.Imagen} style={{clipPath: 'inset(0% 50% 0% 0%)', transform: 'translate(25%)'}} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={producto.Imagen} style={{clipPath: 'inset(0% 0% 0% 50%)', transform: 'translate(-25%)'}} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            </div>
          
            <div className="col-md-4">
              <div className="card-body">
                <h5 className='card-title'>{producto.Nombre}</h5>
                <br />
                <p className='card-text'>{producto.Descripcion}</p>
                <p className='card-text'>Precio: ${producto.Precio}</p>
                <p className='card-text'>Tallas: {producto.Tallas.join(' - ')}</p>
                <p className="card-text"><small className="text-body-secondary">Para comprar contactanos por Whatsapp <i className="bi bi-whatsapp"></i> al: +54 9 351 XXX-XXXX</small></p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className='text-start mb-6'>También te puede interesar</h3>
        <br />
        <div className="row row-cols-2 row-cols-md-3 g-4">
          {prendas.filter(p => p.Id !== producto.Id).map((p, index)=> (
              <Link to={`/producto/${p.Id}`} key={index}>
                <div className="col text-center">
                <div className="card">
                  <img src={p.Imagen} style={{clipPath: 'inset(0% 50% 0% 0%)', transform: 'translate(25%)'}} className="card-img-top" alt={p.Nombre}/>
                  <div className="card-body">
                    <h5 className="card-title">{p.Nombre}</h5>
                  </div>
                </div>
                </div>
              </Link>
          ))}
        </div>
        <br/>

      </div>
    )
}

export default Producto;