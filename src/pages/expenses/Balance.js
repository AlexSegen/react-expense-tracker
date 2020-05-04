import React, { useContext, useState, useEffect } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';
import { formatNumber} from '../../helpers/utils';
import styles from './balance.module.scss';

const Balance = () => {
    const { transactions } = useContext(TransactionsContext);
    const [sum, setSum] = useState(0);

    useEffect(() => {

         setSum(() => transactions.reduce((prev, current) => {
             return prev + current.amount
         }, 0))
 
     }, [transactions]);

    return ( 
        <div className={styles.balance__box}>
            <span className={styles.balance__title}>Balance actual</span>
            <span className={styles.balance__amount}>{formatNumber(sum)}</span>
        </div>
     );
}
 
export default Balance;