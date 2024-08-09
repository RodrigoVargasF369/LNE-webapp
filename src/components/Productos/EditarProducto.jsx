import {useState, useEffect} from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {get, post, put} from 'aws-amplify/api'

function EditarProducto(){

    const {id} = useParams();
    const navigate = useNavigate();
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const [ropa, setRopa] = useState({});

    useEffect(()=>{
        getRopa(id)
    }, []);
    
    const getRopa = async (id) => {
        if (id > 0){
            try{
                const {body} = await get({
                    apiName: 'lneAPI',
                    path: `/ropas/${id}`,
                }).response;
                const data = await body.json();
                setRopa(data);
                setValue('Imagen', data.Imagen)
                setValue('Nombre', data.Nombre)
                setValue('Descripcion', data.Descripcion)
                setValue('Precio', data.Precio)
                setValue('Tallas', data.Tallas)

            }catch(error){
                console.error('Error obteniendo ropa:', error);
                alert('Error obteniendo ropa.\nIntente más tarde');
                volver();
            }
        }
    }

    const volver = ()=>{
        navigate('/editarproductos')
    }

    const cancelar = ()=>{
        volver()
    } 

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setValue('Imagen',file);
    };
    
    const onSubmit = async(data) => {
        data.CategoriaId = 1
        data.Tallas = data.Tallas.replace(/\s+/g, '').split('-');

        if (id > 0) {
            try{
                const {body} = await put({
                    apiName: 'lneAPI', 
                    path: `/ropas/${id}`, 
                    options:{body: data}
                }).response
                // const data = await body.json()
            }catch(error){
                console.error('Error editando ropa:', error);
                alert('Error al editar ropa especificada.\nIntente más tarde');
            }
        }
        else {
            data.Id = 2
            try{
                const {body} = await post({
                    apiName: 'lneAPI', 
                    path: `/ropas`, 
                    options:{body: data}
                }).response;
                // const data = await body.json();
            }catch(error){
                console.error('Error agregando ropa:', error);
                alert('Error al agregar ropa especificada.\nIntente más tarde');
            }
        }
        volver();
    }

    return( 
    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 container'>
      <h1 className='mb-5'>Ropa {id > 0? ropa.Nombre : 'nueva'}</h1>

        <div className="row mt-3">
            <div className="col-4 text-end">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={handleImageChange}/>
                    <label className="custom-file-label" htmlFor="customFile">Seleccionar Archivo</label>
                </div>    
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-4 text-end">
                <label htmlFor="Nombre">Nombre:</label>
            </div>
            <div className="col-8 text-start">
                <input type="text" 
                    className='form-control'
                    defaultValue={ropa.Nombre}
                    {...register('Nombre', {required: 'El nombre es requerido'})}
                />
                {errors.Nombre && <span className='text-danger'>{errors.Nombre.message}</span>}
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-4 text-end">
                <label htmlFor="Descripcion">Descripcion:</label>
            </div>
            <div className="col-8 text-start">
                <input type="text" 
                    className='form-control'
                    {...register('Descripcion', {required: 'La descripcion es requerida'})}
                />
                {errors.Descripcion && <span className='text-danger'>{errors.Descripcion.message}</span>}
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-4 text-end">
                <label htmlFor="Precio">Precio:</label>
            </div>
            <div className="col-8 text-start">
                <input type="text" 
                    className='form-control'
                    {...register('Precio', {required: 'El precio es requerido', 
                        validate: (value) => {return !isNaN(value) || 'Debe ser numérico'} })}
                    />
                    {errors.Precio && <span className='text-danger'>{errors.Precio.message}</span>}
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-4 text-end">
                <label htmlFor="Tallas">Tallas:</label>
            </div>
            <div className="col-8 text-start">
                <input type="text" placeholder="ej.: S-M-L"
                    className='form-control'
                    {...register('Tallas', {required: 'Las tallas es requerida'})}
                />
                {errors.Tallas && <span className='text-danger'>{errors.Tallas.message}</span>}
            </div>
        </div>

        <div className="mt-5 mb-5">
            <button className='btn btn-danger ms-2' onClick={cancelar}>Cancelar</button>
            <input className="btn btn-success ms-2" type="submit" value={id > 0? 'Actualizar' : 'Crear'} />
        </div>
    </form>
    )
}

export default EditarProducto;