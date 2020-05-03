import React from 'react';
import Layout from '../../components/Layout';
import styles from './index.module.scss';
import PageHeader from '../../components/shared/PageHeader';
import AmountBox from './AmountBox';
import History from './History';

const Expenses = () => {

    return ( 
        <Layout>
            <PageHeader title="Expense Tracker" />
            <div className={styles.page__content}>
                <div className={styles.balance__box}>
                    <span className={styles.balance__title}>Your balance</span>
                    <span className={styles.balance__amount}>$ 13.900</span>
                </div>
                
                <AmountBox/>
                
                <History/>
            </div>
        </Layout>
     );
}
 
export default Expenses;