import React,{ useState, useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';

import HistoryItem from './HistoryItem';
import TransactionForm from './TransactionForm';
import styles from './history.module.scss';

const History = () => {

    const { transactions } = useContext(TransactionsContext);
    
    const [showForm, setShowForm] = useState(false);

    const handleClose = () => {
        setShowForm(false)
    }
    
    return ( 
        <div className={styles.h__content}>
            <div className={styles.h__header}>
                <h4 className={styles.h__title}>History</h4>
                {
                    !showForm && 
                    <button className={styles.add} onClick={() => setShowForm(!showForm)}>
                        <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        Add transaction
                    </button>
                }
            </div>

            { !showForm && 
            <div className={styles.h__container}>
                {
                  transactions && transactions.length > 0 ? transactions.map(item =>
                        <HistoryItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        comments={item.comments}
                        createdAt={item.createdAt}
                        amount={item.amount}/>) :
                        <div className="text-muted small text-center p-3">No transactions.</div>
                }
                
            </div>}
            
            { showForm && <TransactionForm onClose={handleClose}/> }
            
        </div>
     );
}
 
export default History;