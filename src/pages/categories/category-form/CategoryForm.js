import React, { useState, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { ThemeContext }  from '../../../context/ThemeContext';
import { CategoriesContext } from '../../../context/CategoriesContext';

import styles from './category-form.module.scss';

const CategoryForm = () => {
    const { t } = useTranslation();

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
        <div className={styles.f__container}>
               <div className={styles.field__group}>
                <input style={{ background: theme.ui, borderColor: theme.ui, color: theme.text }}
                        onChange={e => setCategory({
                        ...category,
                        title: e.target.value
                    })}
                    value={category.title} placeholder={t('category name')}  type="text" name="title" id="title" className={styles.control}/>
                    <button onClick={handleSubmit} className={styles.button} type="button">{t('add category')}</button>
               </div>
        </div> 
     );
}
 
export default CategoryForm;