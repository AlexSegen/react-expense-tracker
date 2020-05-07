import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

const FormatAmount = ({val}) => {

    const { currentLang } = useContext(LangContext);

    const formatter = () => {
        if (!val) { return 0; }
        return new Intl.NumberFormat(currentLang === 'es' ? 'es-ES' : 'en-US', { style: 'currency', currency: 'CLP' }).format(val);
    }
    return ( 
        <>{formatter()}</>
     );
}

export default FormatAmount;
 