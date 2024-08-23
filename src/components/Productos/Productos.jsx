import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import prendas from '../../resources/prendas.json'
//import { get, isCancelError } from "aws-amplify/api"
//import './productos.css'

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

    const getRopas = () => {
        try{
            setRopas(prendas)
        }catch(error){
            setRopas([])
            volver()
        }
    }

    const volver = ()=>{
        navigate('/')
    }

    useEffect(()=>{
        getRopas()
    }, [])

    return(
        <div className="container-fluid mt-4">
        <div className="row row-cols-2 row-cols-md-3 g-4">
            {ropas.length>0 && ropas.map((r, index)=>{return(
            <div className="col" key={index}>
                <div className="card border-0 text-center">
                    <img src={r.Imagen} className="card-img-top" alt={r.Nombre} style={{clipPath: 'inset(0% 50% 0% 0%)', transform: 'translate(25%)'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{r.Nombre}</h5>
                        {/* <p className="carlla)=>{retud-text">
                            <span>Tallas:</span>
                            {r.Tallas.map((tarn(<span key={talla}>{talla}</span>);})}
                        </p>
                        <p className="card-text">
                            <span>Precio: ${r.Precio}</span>
                        </p> */}
                        <Link className="text-primary" to={`/producto/${r.Id}`}> Ver detalles  <i className="bi bi-box-arrow-up-right"></i></Link>
                    </div>
                </div>
            </div>)})}
        </div>  
        </div>      
    )
}

export default Productos