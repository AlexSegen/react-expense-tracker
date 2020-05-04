import React,{ useEffect, useRef, useContext, useState } from 'react';
import Chart from 'chart.js';

import { TransactionsContext } from '../../context/TransactionContext';
import { categoryList } from '../../helpers/constants';

import styles from './chart.module.scss'

const PieChart = ({onClose}) => {

    const { transactions } = useContext(TransactionsContext);
    const [selectedChart, setSelectedChart] = useState('pie');

    const myChart = useRef(null);

    const loadChart = () => {

        let data = [];
        
        for(let category of categoryList) {
            data.push(transactions.filter(item => item.category === category.value).reduce((prev, current) => {
                return current.amount < 0 ? prev + current.amount : prev + 0
            }, 0) * -1);
        }

        new Chart(myChart.current, {
            type: selectedChart,
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
    }, [selectedChart, transactions]);

    return ( 
        <div className={styles.chart__container}>
    
            <div className="form-group" style={{maxWidth: "150px", margin: "0 auto 20px"}}>
                <select className="form-control form-control-sm" onChange={e => setSelectedChart(e.target.value)} value={selectedChart}>
                    <option value="pie">Pie Chart</option>
                    <option value="bar">Bar Chart</option>
                </select>
            </div>

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
