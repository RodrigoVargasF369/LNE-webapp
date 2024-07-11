import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
//import { get, isCancelError } from "aws-amplify/api"
import './productos.css'

function Productos(){

    const [ropas, setRopas] = useState([])
    const navigate = useNavigate()

    // const getRopas = async () => {
    //     try {
    //         const response = await get({
    //             apiName: 'APILNE',
    //             path: '/ropas'
    //         });
    //         const data = await response.body.json();
    //         setRopas(data);
    //     } catch (error) {
    //         console.error('Error obteniendo las ropas:', error);
    //         alert('Error obteniendo las ropas.\nIntente más tarde');
    //     }
    // };

    const volver = ()=>{
        navigate('/')
    }

    useEffect(()=>{
        getRopas()
    }, [])


    return(
        <div className="ropas-grid">
            {ropas.length>0 && ropas.map(r=>{
                return(
                    <div key={r.Id} className="ropa-item">
                        <i>{r.Imagen}</i>
                        <h2>{r.Nombre}</h2>
                        <p>{r.Descripcion}</p>
                        <ul>
                            <il>
                                <span>Tallas</span>
                                {ropas.Tallas.map((talla)=>{return(<span key={talla}>{talla}</span>);})}
                            </il>
                            <il>
                            <span>Colores</span>
                                {ropas.Colores.map((color)=>{return(<span key={color}>{color}</span>);})}
                            </il>
                        </ul>
                        <p>
                            <span>Precio: ${r.Precio}</span>
                        </p>
                        <p>
                            <span>Stock: ${r.CantidadInventario}</span>
                        </p>
                        {/* <Link to={`/ropa/${r.Id}`}> Ver detalles</Link> */}
                    </div>
                );
            })}
            
        </div>
    )
}

export default Productos