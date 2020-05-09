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

const Button = ({children, onClick, disabled, light, style}) => {
    
    return (
        <button className={`${styles.action} ${!light && styles.dark} ${style}`}
                    onClick={onClick} disabled={disabled}>
                        { children }
        </button>
    )
}

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

                    <Button onClick={() => setView('add')} light={theme.light} disabled={view === 'add'} style={styles.add}>
                        <PlusCircleIcon/>
                    </Button>

                    <Button onClick={() => setView('transactions')} light={theme.light} disabled={view === 'transactions'} style={styles.list}>
                        <ListIcon/>
                    </Button>

                    <Button onClick={() => setView('chart')} light={theme.light} disabled={view === 'chart'} style={styles.chart}>
                        <ChartIcon/>
                    </Button>

                    <Button 
                    onClick={() => filterTransactions(allTransactions, isFiltered ? false : true)} light={theme.light}
                    style={`${styles.filter} ${isFiltered && styles.active}`}>
                        <FilterIcon/>
                    </Button>
                    
                </div>

                { view === 'transactions' && <History onClose={handleClose}/> }

                { view === 'add' && <TransactionForm onClose={handleClose}/> }

                { view === 'chart' && <Chart onClose={handleClose}/> }
                    
                </div>
        </Layout>
     );
}
 
export default Expenses;