import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import { GlobeIcon, DollarIcon, MoonIcon, SunIcon, TagIcon } from '../../components/icons';
import styles from './index.module.scss';

import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../context/ThemeContext';
import { LangContext } from '../../context/LangContext';
import { Link } from 'react-router-dom';

const TrackerSettings = () => {

    const { t } = useTranslation();

    const { theme, toggleTheme } = useContext(ThemeContext);

    const { currentLang, changeLanguage, currentCurrency, changeCurrency} = useContext(LangContext);

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
                        <span>{currentLang === 'es' ? 'Español' : 'English'}</span>
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

                    <button
                    onClick={() => changeCurrency(currentCurrency === 'CLP' ? 'USD' : 'CLP')}
                    style={{
                        borderColor: theme.ui,
                        background: theme.ui,
                        color: theme.text
                    }}
                     className={styles.grid__item}>
                        <DollarIcon/>
                        <span>{currentCurrency === 'CLP' ? 'CLP' : 'USD'}</span>
                    </button>

                    <Link
                    to="/categories"
                    className={styles.grid__item}
                    style={{
                        borderColor: theme.ui,
                        background: theme.ui,
                        color: theme.text
                    }}
                     >
                        <TagIcon/>
                        <span>Categorías</span>
                    </Link>

                </div>
            </div>
        </Layout>
     );
}
 
export default TrackerSettings;