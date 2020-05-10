import React, { useContext } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import '../assets/scss/main.scss'
import { ThemeContext } from '../context/ThemeContext';

import styles from './layout.module.scss';

const Layout = ({children}) => {
    const { theme } = useContext(ThemeContext);
    return ( 
        <div 
        style={{
            background: theme.bg,
            color: theme.text
        }}
        className={styles.app__container}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
     );
}
 
export default Layout;