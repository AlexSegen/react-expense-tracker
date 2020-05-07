import React from 'react';
import Routes from './routes'
import ThemeContextProvider from './context/ThemeContext'
import TransactionsContextProvider from './context/TransactionContext';

const App = () => {
    return ( 
        <ThemeContextProvider>
            <TransactionsContextProvider>
                <Routes/>
            </TransactionsContextProvider>
        </ThemeContextProvider>
     );
}
 
export default App;