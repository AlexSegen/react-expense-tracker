import React,{ useState, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../context/ThemeContext';
import { CategoriesContext } from '../../context/CategoriesContext';
import { TransactionsContext } from '../../context/TransactionContext';

import { FormatDateTime, FormatAmount } from '../../helpers/utils';

import styles from './history-item.module.scss';

const HistoryItem = ({title, category, amount, comments, createdAt, doc}) => {
    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);
    const { categories } = useContext(CategoriesContext);
    const { deleteTransaction } = useContext(TransactionsContext);

    const [toggle, setToggle] = useState(false);

    const deleteEntry = () => {
        deleteTransaction(doc)
    }

    const handleToggle = e => {
        e.stopPropagation();
        setToggle(!toggle)
    }

    const getCategoryLabel = id => {
        const active = categories.find(item => item.id === id);
        return active ? active.title : '';
    }

    const style = {
        background: theme.ui,
        borderColor: theme.ui
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
                        <FormatAmount val={amount}/>
                    </div>
                </div>
                <button
                style={style} 
                onClick={deleteEntry} className={styles.action} type="button">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </button>
            </div>

            { toggle &&
                <div
                style={style} 
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
                        <FormatDateTime date={createdAt}/>
                    </div>

                </div>
            }

        </div>
    )
}

export default HistoryItem;