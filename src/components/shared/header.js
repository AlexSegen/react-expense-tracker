import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import { ThemeContext} from '../../context/ThemeContext';
import { useFirebaseApp, useUser } from 'reactfire';

import { SettingsIcon, BulbIcon, SignOutIcon } from '../icons';

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
                    <Link to="/settings"
                     className={styles.action}>
                        <SettingsIcon/>
                    </Link>
                    <button className={`${styles.action} ${styles.bulb}`} type="button" onClick={toggleTheme}>
                        <BulbIcon/>
                    </button>

                    <button className={styles.action} type="button" onClick={SignOut}>
                        <SignOutIcon/>
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