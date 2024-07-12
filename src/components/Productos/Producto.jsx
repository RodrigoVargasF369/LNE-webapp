import { useParams, Link } from 'react-router-dom'
import prendas from '../../resources/prendas.json'

function Producto(){
    const { id } = useParams();
    const producto = prendas.find(p => p.Id === parseInt(id));
  
    if (!producto) {
      return <div>Producto no encontrado</div>;
    }
  
    return (
      <div>
        <img src={producto.Imagen} alt={producto.Nombre} style={{ width: '200px', height: '200px' }} />
        <h2>{producto.Nombre}</h2>
        <p>{producto.Descripcion}</p>
        <p>Precio: ${producto.Precio}</p>
        <p>Cantidad en Inventario: {producto.CantidadInventario}</p>
        <p>Tallas: {producto.Tallas.join(', ')}</p>
        <p>Colores: {producto.Colores.join(', ')}</p>
        
        <h3>Otros Productos</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {prendas.filter(p => p.Id !== producto.Id).map(p=> (
            <div key={p.Id} style={{ margin: '10px' }}>
              <Link to={`/producto/${p.Id}`}>
                <img src={p.Imagen} alt={p.Nombre} style={{ width: '100px', height: '100px' }} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Producto;