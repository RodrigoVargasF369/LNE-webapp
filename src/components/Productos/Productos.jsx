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
        <div className="container-fluid mt-3">
        <div className="row row-cols-2 row-cols-md-3 g-4">
            {ropas.length>0 && ropas.map(r=>{return(
            <div className="col ">
                <div className="card">
                    <img src={r.Imagen} className="card-img-top" alt={r.Nombre} style={{clipPath: '20px 20px 20px 20px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{r.Nombre}</h5>
                        {/* <p className="card-text">
                            <span>Tallas:</span>
                            {r.Tallas.map((talla)=>{return(<span key={talla}>{talla}</span>);})}
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