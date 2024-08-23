import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { get, del} from "aws-amplify/api"
import './productos.css'

function EditarProductos(){

    const [ropas, setRopas] = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        getRopas()
    }, [])
    
    const getRopas = async () => {
        try {
            const {body} = await get({
                apiName: 'lneAPI',
                path: '/ropas'
            }).response;
            const data = await body.json();
            console.log(data)
            setRopas(data);
        } catch (error) {
            console.error('Error obteniendo las ropas:', error);
            alert('Error obteniendo las ropas.\nIntente más tarde');
            volver();
        }
    };

    const volver = ()=>{
        navigate('/')
    }

    const deleteRopa = async (id) => {
        if (window.confirm("¿Borrar esta ropa de la lista?")) {
            try{
                const {statusCode} = await del({
                    apiName: 'lneAPI',
                    path: `/ropas/${id}`}).response;
                console.log(statusCode)
                getRopas();
            }catch(error){
                console.error('Error eliminando ropa:', error);
                alert('Error eliminando ropa especificada.\nIntente más tarde');
            }
        }
      };


    return(
    <div className="container">
        <div className="text-start">
          <table className="table mt-5">
            <thead className="table-dark">
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Tallas</th>
                <th><Link className="btn text-white" to='/editarproducto/0'><i className="bi bi-plus-circle"></i> Agregar ropa nueva</Link></th>
              </tr>
            </thead>
            <tbody>
              {ropas &&
                ropas.map((r) => {
                  return (
                    <tr key={r.Id}>
                      <td><img src={r.Imagen} alt='...' /></td>
                      <td>{r.Nombre}</td>
                      <td>{r.Descripcion}</td>
                      <td>{r.Precio}</td>
                      <td>{r.Tallas.join('-')}</td>
                      <td>
                        <button
                          className="btn btn-default"
                          onClick={() => deleteRopa(r.Id)}
                        >
                          <i className="bi bi-trash3 text-danger"></i>
                        </button>
                        <Link className="btn btn-default" to={`/editarproducto/${r.Id}`} >
                            <i className="bi bi-pencil text-primary"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
    </div>    
    )
}

export default EditarProductos;