import React, { useContext, useState, useEffect } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';
import { formatNumber} from '../../helpers/utils';
import styles from './amount-box.module.scss';

const AmountBox = () => {

    const { transactions } = useContext(TransactionsContext);

    const [incomes, setIncomes] = useState(0);
    const [expenses, setExpenses] = useState(0);

    useEffect(() => {

        setIncomes(() => transactions.reduce((prev, current) => {
            return current.amount >= 0 ? prev + current.amount : prev + 0
        }, 0))

        setExpenses(() => transactions.reduce((prev, current) => {
            return current.amount < 0 ? prev + current.amount : prev + 0
        }, 0))

    }, [transactions]);

    return ( 
        <div className={styles.amounts__box}>
            <div className={styles.box}>
                <span className={styles.title}>Income</span>
                <span className={`${styles.value} ${styles.income}`}>{formatNumber(incomes)}</span>
            </div>
            <div className={styles.box}>
            <span className={styles.title}>Expense</span>
                <span className={`${styles.value} ${styles.expense}`}>{formatNumber(expenses)}</span>
            </div>
        </div>
     );
}
 
export default AmountBox;