import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import { ThemeContext} from '../../context/ThemeContext';
import { useFirebaseApp, useUser } from 'reactfire';

import { SettingsIcon, SignOutIcon } from '../icons';

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const firebase = useFirebaseApp();
    const user = useUser();

    const SignOut  = async () => {
        await firebase.auth().signOut();
    }

    const style = {
        color: theme.text,
        background: theme.ui,
        borderColor: theme.ui
    };

    return ( 
        <header
         className={`${styles.header} ${!theme.light && styles.dark}`} style={style}>
            <div className={styles.title}>
                <Link style={{color: theme.text}} to="/">Expense Tracker</Link>
            </div>
            <div className={styles.toolbar}>
            { user && 
                <>
                    <Link to="/settings"
                    style={style}
                     className={styles.action}>
                        <SettingsIcon/>
                    </Link>
                    <button 
                    style={style}
                    className={styles.action} type="button" onClick={SignOut}>
                        <SignOutIcon/>
                    </button>
                </>}
            </div>

        </header>
     );
}
 
export default Header;