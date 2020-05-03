import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import '../assets/scss/main.scss'

const Layout = ({children}) => {
    return ( 
        <div className="app__container">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
     );
}
 
export default Layout;