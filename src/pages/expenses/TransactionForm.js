import React from 'react';
import styles from './transaction-form.module.scss';

const TransactionForm = ({onClose}) => {
    return (
        <div className={styles.f__container}>
           <form>
               <div className="form-group mb-2">
                   <label className="small text-muted" htmlFor="title">Title</label>
                   <input type="text" name="title" id="title" className="form-control form-control-sm"/>
               </div>
               <div className="form-group mb-2">
                    <label className="small text-muted" htmlFor="category">Category</label>
                    <select className="form-control form-control-sm" name="category" id="category">
                        <option value="0">---</option>
                        <option value="service">Service</option>
                        <option value="food">Food</option>
                    </select>
               </div>
               <div className="form-group mb-2">
                   <label className="small text-muted" htmlFor="amount">Amount</label>
                   <input type="number" name="amount" id="amount" className="form-control form-control-sm text-right"/>
               </div>
               <div className="text-right">
                    <button
                    onClick={() => onClose()}
                     className="btn btn-outline-link btn-sm mr-2">Cancel</button>
                   <button className="btn btn-success btn-sm">Add Transaction</button>
               </div>
           </form>
        </div> 
     );
}
 
export default TransactionForm;