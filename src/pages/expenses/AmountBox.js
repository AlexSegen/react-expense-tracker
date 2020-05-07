import React, { useContext, useState, useEffect } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';
import { formatNumber} from '../../helpers/utils';
import styles from './amount-box.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from "react-i18next";

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
                <span className={`${styles.value} ${styles.income}`}>{formatNumber(incomes)}</span>
            </div>
            <div className={styles.box}>
            <span className={styles.title}>{t("outcome")}</span>
                <span className={`${styles.value} ${styles.expense}`}>{formatNumber(expenses * -1)}</span>
            </div>
        </div>
     );
}
 
export default AmountBox;