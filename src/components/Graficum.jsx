import {
    ArcElement,
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default class Graficum extends Component {
    render() {
        const {dados} = this.props
    

        // configuraçoes dos gráfico
        const options = {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tabela de anos dos carro listados',
            },
            },
        };
        
        
        // retira apenas a quantidade de anos que existem nos dados
        const anos = [...new Set(dados.map(item => item.ano))].sort(); 
        const labels = anos;
        
        // separa todos os anos para poder contar a quantidade de carros repetidos no mesmo ano
        var xanos = [];
        xanos = (dados.map(item => item.ano));
        
        // conta a quantidade de cada ano que possui de carros repetidos
        var counts = {}, i, value;
        for (i = 0; i < xanos.length; i++) {
            value = xanos[i];
            if (typeof counts[value] === "undefined") {
            counts[value] = 1;
            } else {
            counts[value]++;
            }
        }
        
        // trasnforma de objeto em array para poder exibir o gráfico 
        var result = [];
        for (var key in counts) {
            if (counts.hasOwnProperty(key)) {
            result.push(counts[key]);
            }
        }
        
        const graficoum = {
            labels,
            datasets: [
            {
                label: 'Quantidade de carros listados por ano',
                data: result,
                backgroundColor: 'rgba(44, 99, 132, 0.7)',
            },
            ],
        };
        

        return ( 
        <div>
            <Bar options={options} data={graficoum} />
        </div>
        )
    }}


  