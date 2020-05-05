import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';

import { useFirebaseApp, useUser } from 'reactfire';

const Header = () => {
    const firebase = useFirebaseApp();
    const user = useUser();

    const SignOut  = async () => {
        await firebase.auth().signOut();
    }

    return ( 
        <header className={styles.header}>
            { user && <button className="btn btn-sm btn-link" type="button" onClick={SignOut} >Sign Out</button>}
            { !user &&  <Link className="btn btn-sm btn-link" to='/login'>Login</Link> }
        </header>
     );
}
 
export default Header;