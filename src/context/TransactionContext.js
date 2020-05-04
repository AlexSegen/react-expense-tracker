import React, { useState, useEffect, createContext } from 'react';
import { create, list, remove } from '../services/firebase.service';
import { v4 as uuidv4 } from 'uuid';

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({children}) => {

    const [transactions, setTransactions] = useState([]);

    const loadStorage = async () => {
        const records = await list();
        setTransactions(records ? records : []);
    }

    const addTransaction = async ({title, category, amount, comments }) => {

        const payload = {
            id: uuidv4(),
            title,
            category,
            amount : parseInt(amount),
            comments,
            createdAt: new Date().toISOString()
        }

        const data = await create(payload)

        setTransactions([
            ...transactions,
            data
        ]);
        
    }
    const deleteTransaction = key => {
        remove(key)
        setTransactions(transactions.filter(u => u.key !== key));
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

    return ( 
        <TransactionsContext.Provider value={{transactions, addTransaction, deleteTransaction, updateTransaction}}>
            {children}
        </TransactionsContext.Provider>
     );
}
 
export default TransactionsContextProvider;