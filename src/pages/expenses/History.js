import React,{ useState, useContext } from 'react';
import styles from './history.module.scss';
import TransactionForm from './TransactionForm';
import { TransactionsContext } from '../../context/TransactionContext';

const HistoryItem = ({title, category, amount, comments, created, id}) => {

    const { deleteTransaction } = useContext(TransactionsContext);

    const [toggle, setToggle] = useState(false);

    const deleteEntry = () => {
        deleteTransaction(id)
    }

    const handleToggle = e => {
        e.stopPropagation();
        setToggle(!toggle)
    }

    return (
        <div className={styles.h__item}>
            <div className={`${styles.header} ${amount < 0 && styles.expense }`}>
                <div className={styles.details} onClick={handleToggle}>
                    <div className={styles.description}>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.category}>{category}</span>
                    </div>
                    <div className={styles.amount}>
                        {amount}
                    </div>
                </div>
                <button onClick={deleteEntry} className={styles.action} type="button">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>
            </div>

            { toggle &&
                <div className={styles.body}>
    
                    <p className={styles.title}>Created</p>
                    <div className={styles.desc}>
                        {created}
                    </div>

                    <p className={styles.title}>Comments</p>
                    <div className={styles.desc}>
                        {comments}
                    </div>
                </div>
            }

        </div>
    )
}

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
                    transactions.map(item =>
                        <HistoryItem
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        comments={item.comments}
                        created={item.createdAt}
                        amount={item.amount}/>)
                }
                
            </div>}
            
            { showForm &&
                <TransactionForm onClose={handleClose}/>
            }
            
        </div>
     );
}
 
export default History;