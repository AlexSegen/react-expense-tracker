import React from 'react';
import styles from './chart.module.scss'

const Chart = ({onClose}) => {
    return ( 
        <div className={styles.chart__container}>


            <div className="text-right">
                <button
                onClick={() => onClose('transactions')}
                    className="btn btn-outline-link btn-sm mr-2">Close</button>
            </div>

        </div>
     );
}
 
export default Chart;
