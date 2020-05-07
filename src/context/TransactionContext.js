import React, { useState, useEffect, createContext } from 'react';
import moment from 'moment'
import { create, list, remove } from '../services/firebase.service';
import { v4 as uuidv4 } from 'uuid';

export const TransactionsContext = createContext();

const TransactionsContextProvider = ({children}) => {

    const [transactions, setTransactions] = useState([]);
    const [allTransactions, setAllTransactions] = useState([]);
    const [isFiltered, setIsFiltered] = useState([]);

    const loadStorage = async () => {
        const records = await list();
        setAllTransactions(records)
        filterTransactions(records);
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

    function filterTransactions (array, pastMonth) {

        const formatString = 'YYYY-MM-DD'

        const date = new Date(), y = date.getFullYear(), m = date.getMonth();

        let firstDay;
        let lastDay;

        if (pastMonth) {
            firstDay = new Date(y, m - 1, 1);
            lastDay = new Date(y, m, 0);
        } else {
            firstDay = new Date(y, m, 1);
            lastDay = new Date(y, m + 1, 0);
        }
        
        const startDate = moment(firstDay).format(formatString);
        const endDate = moment(lastDay).format(formatString);
        
        setIsFiltered(pastMonth);
        setTransactions(array.filter(item =>  moment(item.createdAt).isBetween(startDate, endDate)));
    }

    useEffect(() => {
        loadStorage();
    }, []);

    return ( 
        <TransactionsContext.Provider value={{allTransactions, transactions, addTransaction, deleteTransaction, updateTransaction, filterTransactions, isFiltered}}>
            {children}
        </TransactionsContext.Provider>
     );
}
 
export default TransactionsContextProvider;