import { useParams, Link } from 'react-router-dom'
import prendas from '../../resources/prendas.json'

function Producto(){
    const { id } = useParams();
    const producto = prendas.find(p => p.Id === parseInt(id));
  
    if (!producto) {
      return( 
        <div className='container'>
          <h1 className="text-center">No existe el producto solicitado</h1>
        </div>)
    }
  
    return(
      <div className="container-fluid">
        <div className="card mb-3 mt-3">
          <div className="row g-0">

            <div className="col md-8">
              <img src={producto.Imagen} alt={producto.Nombre} className="img-fluid" />
            {/* <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={producto.Imagen} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={producto.Imagen} style={{clipPath: '20px'}} className="d-block w-100" alt="..."/>
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
            </div>*/}
            </div>
          
            <div className="col md-4">
              <div className="card-body">
                <h5 className='card-title'>{producto.Nombre}</h5>
                <p className='card-text'>{producto.Descripcion}</p>
                <p className='card-text'>Precio: ${producto.Precio}</p>
                <p className='card-text'>Tallas: {producto.Tallas.join('- ')}</p>
                <p className="card-text"><small className="text-body-secondary">Para comprar contactanos por whatsapp al: +54 351 XXX-XXXX</small></p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className='text-start'>También te puede interesar</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {prendas.filter(p => p.Id !== producto.Id).map(p=> (
              <Link to={`/producto/${p.Id}`}>
                <div className="col">
                <div className="card">
                  <img src={p.Imagen} className="card-img-top" alt={p.Nombre}/>
                    <div className="card-body">
                      <h5 className="card-title">{p.Nombre}</h5>
                    </div>
                </div>
                </div>
              </Link>
          ))}
        </div>

      </div>
    )
}

export default Producto;