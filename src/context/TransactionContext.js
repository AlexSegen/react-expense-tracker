import React, { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TransactionsContext = createContext();

const storageName = 'transactions';

const TransactionsContextProvider = ({children}) => {

    const [transactions, setTransactions] = useState([]);

    const loadStorage = () => {
        const storage = localStorage.getItem(storageName);
        setTransactions(storage ? JSON.parse(storage) : []);
    }

    const setStorage = () => {
        localStorage.setItem(storageName, JSON.stringify(transactions));
    }

    const getUser = id => {
        return transactions.find(u => u.id === id)
    }
    const addTransaction = ({title, category, amount, comments }) => {
        setTransactions([
            ...transactions,
            {
                id: uuidv4(),
                title,
                category,
                amount : parseInt(amount),
                comments,
                createdAt: new Date().toISOString()
            }
        ]);
        
    }
    const deleteTransaction = id => {
        setTransactions(transactions.filter(u => u.id !== id));
    }
    const updateTransaction = (id, { title, category, amount, comments}) => {

        transactions[transactions.findIndex(u => u.id === id)] = {
            ...transactions.find(u => u.id === id),
            title,
            category,
            amount: parseInt(amount),
            comments
        };

        setTransactions([...transactions]);
    }

    useEffect(() => {
        loadStorage();
    },[]);

    useEffect(() => {
        setStorage();
    },[transactions]);

    return ( 
        <TransactionsContext.Provider value={{transactions, addTransaction, deleteTransaction, updateTransaction}}>
            {children}
        </TransactionsContext.Provider>
     );
}
 
export default TransactionsContextProvider;