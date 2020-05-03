import React from 'react';
import styles from './page-header.module.scss'

const PageHeader = ({title, subtitle}) => {
    return ( 
        <div className={styles.page__header}>
            <h1 className={styles.title}>{title}</h1>
            { subtitle &&  <p className={styles.subtitle}>{subtitle}</p>}
        </div>
     );
}
 
export default PageHeader;
