import React from 'react';
import Layout from '../../components/Layout';

import { useTranslation } from "react-i18next";

import CategoryForm from './category-form/CategoryForm';
import CategoryList from './category-list/categoryList';

import styles from './index.module.scss';

const TrackerSettings = () => {

    const { t } = useTranslation();

    return ( 
        <Layout>
            <div className={styles.s__content}>
                <h1 className={styles.s__title}>{t('categories page')}</h1>
                <p className={styles.s__description}>{t('categories description')}</p>
                <CategoryForm/>
                <CategoryList/>
            </div>
        </Layout>
     );
}
 
export default TrackerSettings;