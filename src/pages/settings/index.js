import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/Layout';
import { GlobeIcon, BulbIcon, MoonIcon, SunIcon } from '../../components/icons';
import styles from './index.module.scss';

import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../context/ThemeContext';

const TrackerSettings = () => {

    const { t, i18n } = useTranslation();

    const { theme, toggleTheme } = useContext(ThemeContext);

    const [lang, setLang] = useState('es');

    const changeLanguage = () => {
        const lng = lang === 'es' ? 'en' : 'es'
        setLang(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };


    useEffect(() => {
        const lng = localStorage.getItem('lang');
        setLang(lng ? lng : 'en')
    });
    
    return ( 
        <Layout>
            <div className={styles.s__content}>
                <h1 className={styles.s__title}>{t('settings page')}</h1>
                <p className={styles.s__description}>{t('settings description')}</p>
                <div className={styles.grid}>
                    <button
                    style={{
                        borderColor: theme.ui,
                        background: theme.ui,
                        color: theme.text
                    }}
                     onClick={changeLanguage} className={styles.grid__item}>
                        <GlobeIcon/>
                        <span>{lang === 'es' ? 'Español' : 'English'}</span>
                    </button>
                    
                    <button
                    onClick={toggleTheme}
                    style={{
                        borderColor: theme.ui,
                        background: theme.ui,
                        color: theme.text
                    }}
                     className={styles.grid__item}>
                        { theme.light ? <SunIcon/> : <MoonIcon/>}
                        <span>{theme.light ?'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </div>
            </div>
        </Layout>
     );
}
 
export default TrackerSettings;