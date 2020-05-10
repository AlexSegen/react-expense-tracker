import React,{ useContext } from 'react';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../context/ThemeContext';
import { TransactionsContext } from '../../context/TransactionContext';

import HistoryItem from './HistoryItem';
import image from '../../assets/img/no-transactions.svg'
import styles from './history.module.scss';

const History = () => {
    const { t } = useTranslation();

    const { transactions } = useContext(TransactionsContext);
    const { theme } = useContext(ThemeContext);

    return ( 
        <div 
        style={{
            background: theme.bg,
            color: theme.text
        }}
        className={styles.h__content}>

            <div className={styles.h__container}>
                {
                  transactions && transactions.length > 0 ? transactions.map(item =>
                        <HistoryItem
                        key={item.id}
                        doc={item.key}
                        id={item.id}
                        title={item.title}
                        category={item.category}
                        comments={item.comments}
                        createdAt={item.createdAt}
                        amount={item.amount}/>) :
                    <div className={`${styles.h__empty} text-center`}>
                        <img src={image} alt={t('no transactions')} />
                        <p>
                            {t('no transactions')}
                        </p>
                        
                    </div>
                }
            </div>
            
        </div>
     );
}
 
export default History;