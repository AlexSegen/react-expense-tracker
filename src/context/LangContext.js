import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";


export const LangContext = createContext();

const LangContextProvider = ({children}) => {
    
    const { i18n } = useTranslation();

    const [currentLang, setCurrentLang] = useState('es');

    const [currentCurrency, setCurrentCurrency] = useState('USD');

    const changeLanguage = () => {
        const lng = currentLang === 'es' ? 'en' : 'es'
        setCurrentLang(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };

    const changeCurrency = (str) => {

        const def = ['CLP', 'USD'];

        if(def.some(item => item === str)) {
            setCurrentCurrency(str);
            localStorage.setItem('currency', str);
        }

    }
    
    useEffect(() => {
        const lng = localStorage.getItem('lang');
        setCurrentLang(lng ? lng : 'es')

        const curr = localStorage.getItem('currency');
        setCurrentCurrency(curr ? curr : 'CLP')
    }, []);
    
    return ( 
        <LangContext.Provider value={{changeLanguage, currentLang, changeCurrency, currentCurrency}}>
            {children}
        </LangContext.Provider>
     );
}
 
export default LangContextProvider;