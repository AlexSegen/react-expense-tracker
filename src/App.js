import React from 'react';
import Routes from './routes'
import ThemeContextProvider from './context/ThemeContext'
import TransactionsContextProvider from './context/TransactionContext';
import LangContextProvider from './context/LangContext';

const App = () => {
    return ( 
        <ThemeContextProvider>
            <LangContextProvider>
                <TransactionsContextProvider>
                    <Routes/>
                </TransactionsContextProvider>
            </LangContextProvider>
        </ThemeContextProvider>
     );
}
 
export default App;