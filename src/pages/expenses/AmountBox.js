import React from 'react';
import styles from './amount-box.module.scss';

const AmountBox = () => {
    return ( 
        <div className={styles.amounts__box}>
            <div className={styles.box}>
                <span className={styles.title}>Income</span>
                <span className={`${styles.value} ${styles.income}`}>$18.000</span>
            </div>
            <div className={styles.box}>
            <span className={styles.title}>Expense</span>
                <span className={`${styles.value} ${styles.expense}`}>$4.100</span>
            </div>
        </div>
     );
}
 
export default AmountBox;