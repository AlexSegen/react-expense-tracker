import React,{ useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js';

import { TransactionsContext } from '../../context/TransactionContext';
import { categoryList } from '../../helpers/constants';

import styles from './chart.module.scss'

const PieChart = ({onClose}) => {

    const { transactions } = useContext(TransactionsContext);

    const myChart = useRef(null);

    const loadChart = () => {

        let data = [];
        
        for(let category of categoryList) {
            data.push(transactions.filter(item => item.category === category.value).reduce((prev, current) => {
                return current.amount < 0 ? prev + current.amount : prev + 0
            }, 0) * -1);
        }

        new Chart(myChart.current, {
            type: 'pie',
            data: {
                datasets: [{
                    data: data,
                    backgroundColor: [
                        '#3F51B5',
                        '#9FA8DA',
                        '#5C6BC0',
                        '#E91E63',
                        '#F06292',
                        '#E91E63',
                        '#4CAF50',
                        '#81C784',
                        '#388E3C'
                    ],
                }],
                labels: categoryList.map(item => item.label)
            }

        });
    }

    useEffect(() => {
        loadChart()
    })

    return ( 
        <div className={styles.chart__container}>

            <canvas ref={myChart} width="350" height="350"></canvas>

            <div className="text-right">
                <button
                onClick={() => onClose('transactions')}
                    className="btn btn-outline-link btn-sm mr-2">Cerrar</button>
            </div>

        </div>
     );
}
 
export default PieChart;
