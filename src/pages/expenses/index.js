import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';
import styles from './index.module.scss';

import { ThemeContext } from '../../context/ThemeContext';

import Balance from './Balance';
import History from './History';
import AmountBox from './AmountBox';
import Chart from './chart/ChartComponent';
import TransactionForm from './transaction-form/TransactionForm';
import { ListIcon, PlusCircleIcon, ChartIcon } from '../../components/icons';

const Expenses = () => {

    const { theme } =useContext(ThemeContext);

    const [view, setView] = useState('transactions')

    const handleClose = (view) => {
        setView(view);
    }

    return ( 
        <Layout>

                <Balance/>

                <AmountBox/>

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
                        <ListIcon/>
                    </button>

                    <button 
                    className={`${styles.add} ${theme.light ? null : styles.dark}`}
                    onClick={() => setView('add')} disabled={view === 'add'}>
                        <PlusCircleIcon/>
                    </button>

                    <button 
                    className={`${styles.chart} ${theme.light ? null : styles.dark}`}
                    onClick={() => setView('chart')} disabled={view === 'chart'}>
                        <ChartIcon/>
                    </button>
                    
                </div>

                
                { view === 'transactions' && <History onClose={handleClose}/> }

                { view === 'add' && <TransactionForm onClose={handleClose}/> }

                { view === 'chart' && <Chart onClose={handleClose}/> }
                    
                    
                </div>
        </Layout>
     );
}
 
export default Expenses;