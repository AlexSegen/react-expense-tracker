import React, { useState, useContext } from 'react';
import Layout from '../components/Layout';

import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { ThemeContext } from '../context/ThemeContext';

const Login = () => {

    const firebase = useFirebaseApp();

    const { theme } = useContext(ThemeContext);
    
    const center = {
        textAlign: 'center',
        maxWidth: '380px',
        margin: '0 auto'
    }

    const [email, setEmail] = useState('test@yopmail.com');
    const [password, setPassword] = useState('12345678');

    const handleSubmit = async () => {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        //const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return ( 
        <Layout>
            
            {
                <div style={center}>
                    <h1 style={{fontSize: "1.2rem", margin: "0 0 5px"}}>Iniciar sesión</h1>
                    <p className="text-muted">Ingresa tus datos</p>
                    <div className="text-left">
                        <div className="form-group">
                            <input style= {{background: theme.ui, color: theme.text, borderColor: theme.ui}}
                             className="form-control" type="email" name="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value) } />
                        </div>
                        <div className="form-group">
                            <input style= {{background: theme.ui, color: theme.text, borderColor: theme.ui}}
                            className="form-control" type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value) }/>
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