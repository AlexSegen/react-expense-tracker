import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import styles from './index.module.scss';
import AmountBox from './AmountBox';
import History from './History';
import TransactionsContextProvider from '../../context/TransactionContext';
import Balance from './Balance';
import { ThemeContext } from '../../context/ThemeContext';

const Expenses = () => {

    const { theme } =useContext(ThemeContext);

    return ( 
        <Layout>
            <TransactionsContextProvider>
                <div 
                style={{
                    background: theme.bg,
                    color: theme.text
                }}
                className={styles.page__content}>
                    <Balance/>
                    
                    <AmountBox/>
                    
                    <History/>
                </div>
            </TransactionsContextProvider>
        </Layout>
     );
}
 
export default Expenses;