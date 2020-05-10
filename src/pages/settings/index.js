import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import { GlobeIcon, DollarIcon, MoonIcon, SunIcon, TagIcon } from '../../components/icons';
import styles from './index.module.scss';

import { useTranslation } from "react-i18next";
import { ThemeContext } from '../../context/ThemeContext';
import { LangContext } from '../../context/LangContext';
import { Link } from 'react-router-dom';


const Button = ({onClick, children}) => {
    const { theme } = useContext(ThemeContext);
    
    const style = {
        borderColor: theme.ui,
        background: theme.ui,
        color: theme.text
    }

    return (
        <button style={style} onClick={onClick} className={styles.grid__item}>
            {children}
        </button>
    )

}


const TrackerSettings = () => {

    const { t } = useTranslation();

    const { theme, toggleTheme } = useContext(ThemeContext);

    const { currentLang, changeLanguage, currentCurrency, changeCurrency} = useContext(LangContext);

    const style = {
        borderColor: theme.ui,
        background: theme.ui,
        color: theme.text
    }

    return ( 
        <Layout>
            <div className={styles.s__content}>
                <h1 className={styles.s__title}>{t('settings page')}</h1>
                <p className={styles.s__description}>{t('settings description')}</p>
                <div className={styles.grid}>

                    <Button onClick={changeLanguage}>
                        <GlobeIcon/>
                        <span>{currentLang === 'es' ? 'Español' : 'English'}</span>
                    </Button>


                    <Button onClick={toggleTheme}>
                        { theme.light ? <SunIcon/> : <MoonIcon/>}
                        <span>{theme.light ?'Light Mode' : 'Dark Mode'}</span>
                    </Button>

                    <Button onClick={() => changeCurrency(currentCurrency === 'CLP' ? 'USD' : 'CLP')}>
                        <DollarIcon/>
                        <span>{currentCurrency === 'CLP' ? 'CLP' : 'USD'}</span>
                    </Button>


                    <Link to="/categories" className={styles.grid__item} style={style}>
                        <TagIcon/>
                        <span>{t('categories page')}</span>
                    </Link>

                </div>
            </div>
        </Layout>
     );
}
 
export default TrackerSettings;