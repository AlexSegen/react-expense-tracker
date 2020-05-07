import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';

import { ThemeContext } from '../../context/ThemeContext';
import { TransactionsContext } from '../../context/TransactionContext';

import { useTranslation } from "react-i18next";

import Balance from './Balance';
import History from './History';
import AmountBox from './AmountBox';
import Chart from './chart/ChartComponent';
import TransactionForm from './transaction-form/TransactionForm';
import { ListIcon, PlusCircleIcon, ChartIcon, FilterIcon } from '../../components/icons';

import styles from './index.module.scss';

const Expenses = () => {
    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);
    const { allTransactions, filterTransactions, isFiltered } = useContext(TransactionsContext);

    const [view, setView] = useState('transactions');

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
                <h4 className={styles.h__title}>{t("history")} 
                <br/><small className="text-muted">{ isFiltered ? t("past month") : t("current month") }</small></h4>

                    <button 
                    className={`${styles.action} ${!theme.light && styles.dark} ${styles.add}`}
                    onClick={() => setView('add')} disabled={view === 'add'}>
                        <PlusCircleIcon/>
                    </button>

                    <button 
                    className={`${styles.action} ${!theme.light && styles.dark} ${styles.list}`}
                    onClick={() => setView('transactions')} disabled={view === 'transactions'}>
                        <ListIcon/>
                    </button>

                    <button 
                    className={`${styles.action} ${!theme.light && styles.dark} ${styles.chart}`}
                    onClick={() => setView('chart')} disabled={view === 'chart'}>
                        <ChartIcon/>
                    </button>

                    <button 
                    className={`${styles.action} ${!theme.light && styles.dark}  ${styles.filter} ${isFiltered && styles.active}`}
                    onClick={() => filterTransactions(allTransactions, isFiltered ? false : true)}>
                        <FilterIcon/>
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