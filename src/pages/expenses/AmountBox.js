import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import { ThemeContext } from '../../context/ThemeContext';
import { TransactionsContext } from '../../context/TransactionContext';

import { FormatAmount } from '../../helpers/utils';

import styles from './amount-box.module.scss';

const AmountBox = () => {

    const { t } = useTranslation();

    const { transactions } = useContext(TransactionsContext);
    const { theme } = useContext(ThemeContext);

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
        <div className={styles.amounts__box}
        style={{
            background: theme.ui,
            color: theme.text
        }}>
            <div className={styles.box}>
                <span className={styles.title}>{t("income")}</span>
                <span className={`${styles.value} ${styles.income}`}><FormatAmount val={ incomes }/></span>
            </div>
            <div className={styles.box}>
            <span className={styles.title}>{t("outcome")}</span>
                <span className={`${styles.value} ${styles.expense}`}><FormatAmount val={ expenses * -1 }/></span>
            </div>
        </div>
     );
}
 
export default AmountBox;