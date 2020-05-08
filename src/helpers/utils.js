import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

export const FormatDateTime = ({date}) => {

    const { currentLang } = useContext(LangContext);

    const formatter = () => {
        var d = new Date(date);
        return d.toLocaleDateString(currentLang === 'es' ? 'es-CL' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    return ( 
        <>{formatter()}</>
     );
}

export const FormatAmount = ({val}) => {

    const { currentLang, currentCurrency } = useContext(LangContext);

    const formatter = () => {
        if (!val) { return 0; }
        return new Intl.NumberFormat(currentLang === 'es' ? 'es-CL' : 'en-US', { style: 'currency', currency: currentCurrency }).format(val);
    }
    return ( 
        <>{formatter()}</>
     );
}