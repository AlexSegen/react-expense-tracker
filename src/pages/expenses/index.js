import React from 'react';
import Layout from '../../components/Layout';
import styles from './index.module.scss';
import PageHeader from '../../components/shared/PageHeader';
import AmountBox from './AmountBox';
import History from './History';
import TransactionsContextProvider from '../../context/TransactionContext';
import Balance from './Balance';

const Expenses = () => {

    return ( 
        <Layout>
            <PageHeader title="Expense Tracker" />
            <TransactionsContextProvider>
                <div className={styles.page__content}>
                    <Balance/>
                    
                    <AmountBox/>
                    
                    <History/>
                </div>
            </TransactionsContextProvider>
        </Layout>
     );
}
 
export default Expenses;