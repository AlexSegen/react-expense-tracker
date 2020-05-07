import React from 'react';
import Routes from './routes'
import LangContextProvider from './context/LangContext';
import ThemeContextProvider from './context/ThemeContext'
import CategoriesContextProvider from './context/CategoriesContext';
import TransactionsContextProvider from './context/TransactionContext';

const App = () => {
    return ( 
        <ThemeContextProvider>
            <LangContextProvider>
                <CategoriesContextProvider>
                    <TransactionsContextProvider>
                        <Routes/>
                    </TransactionsContextProvider>
                </CategoriesContextProvider>
            </LangContextProvider>
        </ThemeContextProvider>
     );
}
 
export default App;