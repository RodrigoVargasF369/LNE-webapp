import { signUp, signIn, signOut} from 'aws-amplify/auth'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Authenticator, Button } from '@aws-amplify/ui-react'

function SignIn(){
    // const {register, handleSubmit, formState:{errors}} = useForm()
    // const [error, setError] = useState(null)

    // const onSubmit = async (data) => {
    //     console.log(data.username)
    //     try{
    //         await signUp(data)
    //     }catch(error){
    //         console.error(error)
    //         setError(error.message)
    //     }
    // }

    // return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <label>Usuario</label>
    //         <input type="text" {...register('username')} />
    //         {errors.username && <div style={{color: 'red'}}>{errors.username.message}</div>}
    //         <br/>
    //         <label>Correo</label>
    //         <input type="text" {...register('emails')} />
    //         {errors.emails && <div style={{color: 'red'}}>{errors.emails.message}</div>}
    //         <br/>
    //         <label>Contraseña</label>
    //         <input type="text" {...register('password')} />
    //         {errors.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
    //         <br/>
    //         <button type="submit" >sign up</button>
    //         <button type="submit" onClick={signIn}>sign in</button>
    //         <button type="button" onClick={signOut}>sign out</button>
    //         {error && <div style={{color: 'red'}}>{error}</div>}
    //     </form>
    // )

    return(
        <Authenticator>
            <Button onClick={signOut}>Sign Out</Button>
        </Authenticator>
    )
}


export default SignIn;