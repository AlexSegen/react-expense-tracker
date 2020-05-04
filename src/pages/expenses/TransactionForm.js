import React, { useState, useContext } from 'react';
import styles from './transaction-form.module.scss';
import { TransactionsContext } from '../../context/TransactionContext';

const TransactionForm = ({onClose}) => {

    const { addTransaction } = useContext(TransactionsContext);

    const initialState = { title: '', category: '', amount: 0, comments: '' }

    const [transaction, setTransaction] = useState(initialState);

    const handleInputs = e => {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTransaction(transaction);
        setTransaction(initialState);
        onClose('transactions');
    }

    return (
        <div className={styles.f__container}>
           <form onSubmit={handleSubmit}>
               <div className="form-group mb-2">
                   <label className="small text-muted" htmlFor="title">Title</label>
                   <input onChange={handleInputs} value={transaction.title}  type="text" name="title" id="title" className="form-control form-control-sm"/>
               </div>
               <div className="form-group mb-2">
                    <label className="small text-muted" htmlFor="category">Category</label>
                    <select onChange={handleInputs} value={transaction.category} className="form-control form-control-sm" name="category" id="category">
                        <option value="0">---</option>
                        <option value="service">Service</option>
                        <option value="medicine">Medicine</option>
                        <option value="food">Food</option>
                        <option value="transport">Transport</option>
                        <option value="salary">Salary</option>
                        <option value="other">Other</option>
                    </select>
               </div>
               <div className="form-group mb-2">
                   <label className="small text-muted" htmlFor="amount">Amount</label>
                   <input onChange={handleInputs} value={transaction.amount} type="number" name="amount" id="amount" className="form-control form-control-sm text-right"/>
               </div>
               <div className="form-group">
                   <label className="small text-muted" htmlFor="comments">Comments</label>
                   <textarea  onChange={handleInputs} value={transaction.comments} name="comments" id="comments" className="form-control form-control-sm" cols="30" rows="2"></textarea>
               </div>
               <div className="text-right">
                    <button
                    onClick={() => onClose('transactions')}
                     className="btn btn-outline-link btn-sm mr-2">Cancel</button>
                   <button className="btn btn-success btn-sm">Add Transaction</button>
               </div>
           </form>
        </div> 
     );
}
 
export default TransactionForm;