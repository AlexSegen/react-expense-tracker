import React, { useState, useContext } from 'react';
import styles from './transaction-form.module.scss';
import { TransactionsContext } from '../../../context/TransactionContext';
import { ThemeContext }  from '../../../context/ThemeContext';

import { categoryList } from '../../../helpers/constants';

const TransactionForm = ({onClose}) => {

    const { addTransaction } = useContext(TransactionsContext);
    const { theme } = useContext(ThemeContext);

    const initialState = { title: '', category: '', amount: "", comments: '' }

    const [transaction, setTransaction] = useState(initialState);
    const [categories] = useState(categoryList);

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

    return (
        <div 
        style={{
            background: theme.bg,
            color: theme.text
        }}
        className={styles.f__container}>
           <form onSubmit={handleSubmit}>
               <p className="text-center">Agregar transacción</p>
               <div className="form-group mb-3">
                   <input
                   style={{
                    borderColor: theme.ui,
                    background: theme.ui,
                    color: theme.text
                    }}
                    onChange={handleInputs} value={transaction.title} placeholder="Títutlo"  type="text" name="title" id="title" className="form-control text-center"/>
               </div>
               <div className="form-group mb-3">
                    <select
                    style={{
                        borderColor: theme.ui,
                        background: theme.ui,
                        color: theme.text
                        }}
                    onChange={handleInputs} value={transaction.category} className="form-control text-center" name="category" id="category">
                        <option value="0">Selecionar categoría</option>
                        {
                            categories.map(item => (
                                <option key={item.value} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
               </div>
               <div className="form-group mb-3">
                   <input
                    style={{
                        borderColor: theme.ui,
                        background: theme.ui,
                        color: theme.text
                    }}
                    onChange={handleInputs} value={transaction.amount} placeholder="Monto" type="number" name="amount" id="amount" className="form-control text-center"/>
               </div>
               <div className="form-group">
                   <textarea
                    style={{
                        borderColor: theme.ui,
                        background: theme.ui,
                        color: theme.text
                    }}
                    onChange={handleInputs} value={transaction.comments} placeholder="Comentarios" name="comments" id="comments" className="form-control text-center" cols="30" rows="2"></textarea>
               </div>
               <div className="text-right">
                    {
                         transaction.amount > 0 && <button className="btn btn-success btn-sm">Agregar Ingreso</button>
                    }

                    {
                         transaction.amount < 0 && <button className="btn btn-danger btn-sm">Agregar Gasto</button>
                    }
               </div>
           </form>
        </div> 
     );
}
 
export default TransactionForm;