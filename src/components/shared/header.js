import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import { ThemeContext} from '../../context/ThemeContext';

import { useFirebaseApp, useUser } from 'reactfire';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const firebase = useFirebaseApp();
    const user = useUser();

    const SignOut  = async () => {
        await firebase.auth().signOut();
    }

    return ( 
        <header
         className={`${styles.header} ${!theme.light && styles.dark}`}>
            <div className={styles.title}>
                <Link to="/">Expense Tracker</Link>
            </div>
            <div className={styles.toolbar}>
            { user && 
                <>
                    <button
                     className={styles.action} type="button">
                        <svg fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                    </button>

                    <button className={`${styles.action} ${styles.bulb}`} type="button" onClick={toggleTheme}>
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                    </button>

                    <button className={styles.action} type="button" onClick={SignOut}>
                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                    </button>
                </>}
{/*                 { !user &&
                    <Link className={styles.action} to='/login'>
                            <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>    
                    </Link>
                } */}
            </div>

        </header>
     );
}
 
export default Header;