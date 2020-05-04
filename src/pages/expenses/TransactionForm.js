import React, { useState, useContext } from 'react';
import styles from './transaction-form.module.scss';
import { TransactionsContext } from '../../context/TransactionContext';

import { categoryList } from '../../helpers/constants';

const TransactionForm = ({onClose}) => {

    const { addTransaction } = useContext(TransactionsContext);

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
        <div className={styles.f__container}>
           <form onSubmit={handleSubmit}>
               <div className="form-group mb-2">
                   <label className="small text-muted" htmlFor="title">Título</label>
                   <input onChange={handleInputs} value={transaction.title}  type="text" name="title" id="title" className="form-control form-control-sm"/>
               </div>
               <div className="form-group mb-2">
                    <label className="small text-muted" htmlFor="category">Categoría</label>
                    <select onChange={handleInputs} value={transaction.category} className="form-control form-control-sm" name="category" id="category">
                        <option value="0">---</option>
                        {
                            categories.map(item => (
                                <option key={item.value} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
               </div>
               <div className="form-group mb-2">
                   <label className="small text-muted" htmlFor="amount">Monto</label>
                   <input onChange={handleInputs} value={transaction.amount} type="number" name="amount" id="amount" className="form-control form-control-sm text-right"/>
               </div>
               <div className="form-group">
                   <label className="small text-muted" htmlFor="comments">Comentarios</label>
                   <textarea  onChange={handleInputs} value={transaction.comments} name="comments" id="comments" className="form-control form-control-sm" cols="30" rows="2"></textarea>
               </div>
               <div className="text-right">
                    <button
                    onClick={() => onClose('transactions')}
                     className="btn btn-outline-link btn-sm mr-2">Cerrar</button>
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