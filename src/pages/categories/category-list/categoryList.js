import React, { useContext } from 'react';
import {ThemeContext} from '../../../context/ThemeContext';
import {CategoriesContext} from '../../../context/CategoriesContext';
import { TrashIcon, TagIcon } from '../../../components/icons';

import styles from './category-list.module.scss'

const CategoryList = () => {
    const { theme} = useContext(ThemeContext);
    const { categories, deleteCategory } = useContext(CategoriesContext);

    return ( 
        <div
         className={styles.c__list}>
            {
                categories.map(cat => (
                    <div
                    style={{
                        color: theme.text,
                        borderColor: theme.ui,
                    }}
                     className={styles.item} key={cat.id}>
                        <div className={styles.item__title}>
                           <TagIcon/> {cat.title}
                        </div>
                        <div className={styles.item__actions}>
                            <button 
                            style={{
                                borderColor: theme.ui,
                                background: theme.ui,
                            }}
                            onClick={() => deleteCategory(cat.key)}
                            className={styles.action}
                            type="button">
                                <TrashIcon/>
                            </button>
                        </div>
                    </div>
                ))
            }
   
        </div>
     );
}
 
export default CategoryList;