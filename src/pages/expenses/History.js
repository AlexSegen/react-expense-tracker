import React,{ useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';

import HistoryItem from './HistoryItem';
import styles from './history.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

const History = () => {

    const { transactions } = useContext(TransactionsContext);
    const { theme } = useContext(ThemeContext);

    return ( 
        <div 
        style={{
            background: theme.bg,
            color: theme.text
        }}
        className={styles.h__content}>

            <div className={styles.h__container}>
                {
                  transactions && transactions.length > 0 ? transactions.map(item =>
                        <HistoryItem
                        key={item.id}
                        doc={item.key}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        comments={item.comments}
                        createdAt={item.createdAt}
                        amount={item.amount}/>) :
                        <div className="text-muted small text-center p-3">No hay transaciones.</div>
                }
            </div>
            
        </div>
     );
}
 
export default History;