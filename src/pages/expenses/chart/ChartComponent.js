import React,{ useEffect, useRef, useContext, useState } from 'react';
import { CategoriesContext } from '../../../context/CategoriesContext';
import { TransactionsContext } from '../../../context/TransactionContext';
import { ThemeContext } from '../../../context/ThemeContext';

import Chart from 'chart.js';
import { useTranslation } from "react-i18next";

import styles from './chart.module.scss'

const PieChart = () => {

    const { t } = useTranslation();

    const { transactions } = useContext(TransactionsContext);
    const { categories} = useContext(CategoriesContext);
    const { theme } = useContext(ThemeContext);

    const [selectedChart, setSelectedChart] = useState('pie');

    const myChart = useRef(null);

    const loadChart = () => {

        let data = [];
        
        for(let category of categories) {
            data.push(transactions.filter(item => item.category === category.id).reduce((prev, current) => {
                return current.amount < 0 ? prev + current.amount : prev + 0
            }, 0) * -1);
        }

        new Chart(myChart.current, {
            type: selectedChart,
            data: {
                datasets: [{
                    label: t("outcome"),
                    data,
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
                labels: categories.map(item => item.title)
            }
        });
    }

    useEffect(() => {
        loadChart()
    }, [selectedChart, transactions]);

    return ( 
        <div 
        style={{
            background: theme.bg,
            color: theme.text
        }}
        className={styles.chart__container}>
    
            <div className={styles.field__group} style={{maxWidth: "150px", margin: "0 auto 20px"}}>
                <select
                style={{
                    borderColor: theme.ui,
                    background: theme.ui,
                    color: theme.text
                }}
                 className={styles.control} onChange={e => setSelectedChart(e.target.value)} value={selectedChart}>
                    <option value="pie">Pie Chart</option>
                    <option value="bar">Bar Chart</option>
                </select>
            </div>

            <canvas ref={myChart} width="350" height="350"></canvas>

            <div className="text-right text-muted small">
            {t("expense chart")}
            </div>

        </div>
     );
}
 
export default PieChart;
