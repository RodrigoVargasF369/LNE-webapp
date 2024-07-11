// import { signIn } from 'aws-amplify/auth'
// import { useForm } from 'react-hook-form'
// import { useState } from 'react'

// function SignIn(){
//     const {register, handleSubmit, formState:{errors}} = useForm()
//     const [error, setError] = useState(null)

//     const onSubmit = async (data) => {
//         console.log(data.username)
//         try{
//             await signIn(data.username, data.password)
//         }catch(error){
//             console.error(error)
//             setError(error.message)
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label>Usuario</label>
//             <input type="text" {...register('username')} />
//             {errors.username && <div style={{color: 'red'}}>{errors.username.message}</div>}
//             <br/>
//             <label>Contraseña</label>
//             <input type="text" {...register('password')} />
//             {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
//             <br/>
//             <button type="submit" >Ingresar</button>
//             {error && <div style={{color: 'red'}}>{error}</div>}
//         </form>
//     )
// }

// export default SignIn;