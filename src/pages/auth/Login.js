import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';

import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './login.module.scss';
import { useTranslation } from 'react-i18next';

const Login = () => {

    const firebase = useFirebaseApp();

    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);
    
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('test@yopmail.com');
    const [password, setPassword] = useState('12345678');

    const handleSubmit = async () => {
        //const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            setLoading(false)
        });
    }

    const style = {background: theme.ui, color: theme.text, borderColor: theme.ui}
    
    return ( 
        <Layout>
            
            {
                <div className={styles.p__container}>
                    <h1 style={{fontSize: "1.2rem", margin: "0 0 5px"}}>{t('login')}</h1>
                    <p className="text-muted">{t('Start tracking your expenses')}</p>
                    <div className="text-left">
                        <div className={styles.field__group}>
                            <input style= {style}
                             className={styles.control} type="email" name="email" placeholder={t('email')} disabled={loading} value={email} onChange={(e) => setEmail(e.target.value) } />
                        </div>
                        <div className={styles.field__group}>
                            <input style= {style}
                            className={styles.control} type="password" name="password" placeholder={t('password')} disabled={loading} value={password} onChange={(e) => setPassword(e.target.value) }/>
                        </div>
                        <div className={styles.field__group}>
                            <button onClick={handleSubmit} type="button" className={styles.button} disabled={loading}>{loading ? t('loading') : t('Sign In')}</button>
                        </div>
                    </div>
                </div>
            }
            

        </Layout>
     );
}
 
export default Login;