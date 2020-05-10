import React, { useState, useContext } from 'react';
import styles from './transaction-form.module.scss';
import { TransactionsContext } from '../../../context/TransactionContext';
import { CategoriesContext } from '../../../context/CategoriesContext';
import { ThemeContext }  from '../../../context/ThemeContext';

import CategoryForm from '../../categories/category-form/CategoryForm';
import { useTranslation } from "react-i18next";

const TransactionForm = ({onClose}) => {

    const { t } = useTranslation();

    const { addTransaction } = useContext(TransactionsContext);
    const { categories } = useContext(CategoriesContext);
    const { theme } = useContext(ThemeContext);

    const initialState = { title: '', category: '', amount: "", comments: '' }

    const [transaction, setTransaction] = useState(initialState);

    const handleInputs = e => {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(transaction.category === 0) { return; }
        if(transaction.title.trim().length === 0) { return; }
        if(transaction.title.trim().length === 0) { return; }
        
        addTransaction(transaction);
        setTransaction(initialState);
        onClose('transactions');
    }

    const style = {
        borderColor: theme.ui,
        background: theme.ui,
        color: theme.text
    }

    return (
        <div 
        style={{ borderColor: theme.ui, color: theme.text, background: theme.bg }}
        className={styles.f__container}>
           <form onSubmit={handleSubmit}>
               <p className="text-center">{t("add transaction")}</p>
               <div className={styles.field__group}>
                   <input
                   style={style}
                    onChange={handleInputs} value={transaction.title} placeholder={t("title")}  type="text" name="title" id="title" className={styles.control}/>
               </div>
               {
                   categories && categories.length > 0 ?
                    <div className={styles.field__group}>
                        <select
                        style={style}
                        onChange={handleInputs} value={transaction.category} className={styles.control} name="category" id="category">
                            <option value="0">{t("select category")}</option>
                            {
                                categories.map(item => (
                                    <option key={item.id} value={item.id}>{item.title}</option>
                                ))
                            }
                        </select>
                </div> :
                <CategoryForm/>
               }
               
               <div className={styles.field__group}>
                   <input
                    style={style}
                    onChange={handleInputs} value={transaction.amount} placeholder={t("amount")} type="number" name="amount" id="amount" className={styles.control}/>
               </div>
               <div className={styles.field__group}>
                   <textarea
                    style={style}
                    onChange={handleInputs} value={transaction.comments} placeholder={t("comments")} name="comments" id="comments" className={styles.control} cols="30" rows="2"></textarea>
               </div>

               <div className={styles.actions}>
                    {
                         transaction.amount > 0 && <button className={`${styles.button} ${styles.income}`}>{t("add income")}</button>
                    }

                    {
                         transaction.amount < 0 && <button className={`${styles.button} ${styles.outcome}`}>{t("add expense")}</button>
                    }
               </div>
           </form>
        </div> 
     );
}
 
export default TransactionForm;