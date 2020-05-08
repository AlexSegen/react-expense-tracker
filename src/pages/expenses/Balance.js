import React, { useContext, useState, useEffect } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';
import { FormatAmount} from '../../helpers/utils';
import styles from './balance.module.scss';

import { useTranslation } from "react-i18next";

const Balance = () => {
    const { t } = useTranslation();

    const { transactions } = useContext(TransactionsContext);
    const [sum, setSum] = useState(0);

    useEffect(() => {

         setSum(() => transactions.reduce((prev, current) => {
             return prev + current.amount
         }, 0))
 
     }, [transactions]);

    return ( 
        <div className={styles.balance__box}>
            <span className={styles.balance__title}>{t("balance")}</span>
            <span className={styles.balance__amount}><FormatAmount val={ sum }/></span>
        </div>
     );
}
 
export default Balance;