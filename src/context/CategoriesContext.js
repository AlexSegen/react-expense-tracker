import React, { useState, useEffect, createContext } from 'react';
import { create, list, remove } from '../services/category.service';
import { v4 as uuidv4 } from 'uuid';

export const CategoriesContext = createContext();

const CategoriesContextProvider = ({children}) => {

    const [categories, setCategories] = useState([]);

    const loadStorage = async () => {
        const records = await list();
        setCategories(records)
    }

    const addCategory = async ({title}) => {

        const payload = {
            id: uuidv4(),
            title,
            createdAt: new Date().toISOString()
        }

        const data = await create(payload)

        setCategories([
            ...categories,
            data
        ]);
        
    }
    const deleteCategory = key => {
        remove(key)
        setCategories(categories.filter(u => u.key !== key));
    }

    const updateCategory = (key, {title}) => {

        categories[categories.findIndex(u => u.key === key)] = {
            ...categories.find(u => u.key === key),
            title
        };

        setCategories([...categories]);
    }
    useEffect(() => {
        loadStorage();
    }, []);

    return ( 
        <CategoriesContext.Provider value={{categories, addCategory, deleteCategory, updateCategory}}>
            {children}
        </CategoriesContext.Provider>
     );
}
 
export default CategoriesContextProvider;