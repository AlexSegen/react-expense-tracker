import React, { useState, useContext } from 'react';
import { ThemeContext }  from '../../../context/ThemeContext';

import styles from './category-form.module.scss';
import { CategoriesContext } from '../../../context/CategoriesContext';

const CategoryForm = () => {

    const { theme } = useContext(ThemeContext);
    const { addCategory } = useContext(CategoriesContext);

    const initialState = { title: '' }

    const [category, setCategory] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        if(category.title.trim().length === 0) { return; }

        addCategory(category);
        setCategory(initialState);
    }

    return (
        <div 
        style={{
            background: theme.bg,
            color: theme.text
        }}
        className={styles.f__container}>
           <form onSubmit={handleSubmit}>
               <div className="form-group mb-3">
                   <input onChange={e => setCategory({
                       ...category,
                       title: e.target.value
                   })} value={category.title} placeholder="Títutlo"  type="text" name="title" id="title" className="form-control text-center"/>
               </div>
               <div className="text-right">
                    <button className="btn btn-success btn-sm">Agregar</button>
               </div>
           </form>
        </div> 
     );
}
 
export default CategoryForm;