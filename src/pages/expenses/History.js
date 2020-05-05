import React,{ useState, useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';

import HistoryItem from './HistoryItem';
import TransactionForm from './TransactionForm';
import styles from './history.module.scss';
import Chart from './ChartComponent';
import { ThemeContext } from '../../context/ThemeContext';

const History = () => {

    const { transactions } = useContext(TransactionsContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [view, setView] = useState('transactions')

    const handleClose = (view) => {
        setView(view);
    }
    
    return ( 
        <div 
        style={{
            background: theme.bg,
            color: theme.text
        }}
        className={styles.h__content}>
            <div className={styles.h__header}>
                <h4 className={styles.h__title}>Historia</h4>

                <button 
                className={`${styles.list} ${theme.light ? null : styles.dark}`}
                 onClick={() => setView('transactions')} disabled={view === 'transactions'}>
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>

                <button 
                className={`${styles.add} ${theme.light ? null : styles.dark}`}
                 onClick={() => setView('add')} disabled={view === 'add'}>
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>

                <button 
                className={`${styles.chart} ${theme.light ? null : styles.dark}`}
                onClick={() => setView('chart')} disabled={view === 'chart'}>
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                </button>

                <button 
                className={`${styles.bulb} ${theme.light ? null : styles.dark}`} 
                onClick={toggleTheme}>
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                </button>
                
            </div>

            { view === 'transactions' && 
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
                
            </div>}
            
            { view === 'add' && <TransactionForm onClose={handleClose}/> }

            { view === 'chart' && <Chart onClose={handleClose}/> }
            
        </div>
     );
}
 
export default History;