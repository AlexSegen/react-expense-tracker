import React,{ useState, useContext } from 'react';
import { TransactionsContext } from '../../context/TransactionContext';
import { formatNumber, formatDateTime } from '../../helpers/utils';
import { categoryList } from '../../helpers/constants';

import styles from './history-item.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

import { useTranslation } from "react-i18next";

const HistoryItem = ({title, category, amount, comments, createdAt, id, doc}) => {
    const { t } = useTranslation();

    const { deleteTransaction } = useContext(TransactionsContext);
    const { theme } = useContext(ThemeContext);

    const [toggle, setToggle] = useState(false);
    const [categories] = useState(categoryList);

    const deleteEntry = () => {
        deleteTransaction(doc)
    }

    const handleToggle = e => {
        e.stopPropagation();
        setToggle(!toggle)
    }

    const getCategoryLabel = str => {
        const active = categories.find(item => item.value === str);
        return active ? active.label : '';
    }

    return (
        <div className={styles.h__item}>
            <div className={`${styles.header} ${amount < 0 && styles.expense }`}>
                <div className={styles.details} onClick={handleToggle}>
                    <div className={styles.description}>
                        <span className={styles.title}>{title}</span>
                        <span className={styles.category}>{getCategoryLabel(category)}</span>
                    </div>
                    <div className={styles.amount}>
                        {formatNumber(amount)}
                    </div>
                </div>
                <button
                style={{
                    background: theme.ui,
                    borderColor: theme.ui
                }} 
                onClick={deleteEntry} className={styles.action} type="button">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>
            </div>

            { toggle &&
                <div
                style={{
                    background: theme.ui,
                    borderColor: theme.ui
                }} 
                 className={styles.body}>

                    {
                     comments && 
                     <>
                        <p className={styles.title}>{t("comments")}</p>
                        <div className={styles.desc}>
                            {comments}
                        </div>
                     </>   
                    }
    
                    <p className={styles.title}>{t("createdAt")}</p>
                    <div className={styles.desc}>
                        {formatDateTime(createdAt)}
                    </div>

                </div>
            }

        </div>
    )
}

export default HistoryItem;