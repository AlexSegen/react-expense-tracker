import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

const Login = () => {

    const firebase = useFirebaseApp();
    const user = useUser();
    
    const center = {
        textAlign: 'center',
        maxWidth: '380px',
        margin: '0 auto'
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        //const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
    }

    const SignOut = async () => {
        await firebase.auth().signOut()
    }

    return ( 
        <Layout>
            
            {
                user ? 
                <div style={center}>
                    <h1>Welcome</h1>
                    <p>{user.email} </p>
                    <p>You can go <Link className="btn btn-sm btn-link" to="/">Home</Link> or <button type="buttton" className="btn btn-sm btn-link" onClick={SignOut}>Sign Out</button></p>
                </div> :
                <div style={center}>
                    <h1 style={{fontSize: "1.2rem", margin: "0 0 5px"}}>Iniciar sesión</h1>
                    <p className="text-muted">Ingresa tus datos</p>
                    <div className="text-left">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value) } />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value) }/>
                        </div>
                        <div className="form-group text-center">
                            <button onClick={handleSubmit} type="button" className="btn btn-primary">Ingresar</button>
                        </div>
                    </div>
                </div>
            }
            

        </Layout>
     );
}
 
export default Login;