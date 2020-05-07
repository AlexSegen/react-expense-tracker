import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

const FormatDateTime = ({date}) => {

    const { currentLang } = useContext(LangContext);

    const formatter = () => {
        var d = new Date(date);
        return d.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    return ( 
        <>{formatter()}</>
     );
}

export default FormatDateTime;
 