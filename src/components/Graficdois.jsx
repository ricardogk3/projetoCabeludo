import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    // CategoryScale,
    // LinearScale,
    // BarElement,
    // Title,
    Tooltip,
    Legend
  );

export default class Graficdois extends Component {
    render() {
        const {dados} = this.props
        
        // retira apenas a quantidade de anos que existem nos dados
        const cores = [...new Set(dados.map(item => item.cor))].sort(); 
        const labelscor = cores;

        // // separa todos os anos para poder contar a quantidade de carros repetidos no mesmo ano
        var xcores = [];
        xcores = (dados.map(item => item.cor)).sort();

        // // conta a quantidade de cada ano que possui de carros repetidos
        var countscor = {}, i, value;
        for (i = 0; i < xcores.length; i++) {
        value = xcores[i];
        if (typeof countscor[value] === "undefined") {
            countscor[value] = 1;
        } else {
            countscor[value]++;
        }
        }
        // console.log(countscor)

        // // trasnforma de objeto em array para poder exibir o gráfico 
        var resultcor = [];
        for (var key in countscor) {
        if (countscor.hasOwnProperty(key)) {
            resultcor.push(countscor[key]);
        }
        }
        // console.log(resultcor)



        const graficodois = {
        // labels: [ 'Amarelo', 'Azul','Branco','Cinza', 'Marrom', 'Prata','Preto',  'Verde', 'Vermelho',],
        labels:labelscor,
        datasets: [
            {
            label: '# of Votes',
            data: resultcor,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(175, 192, 192, 0.2)',
                'rgba(53, 102, 255, 0.2)',
                'rgba(55, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(175, 192, 192, 1)',
                'rgba(53, 102, 255, 1)',
                'rgba(55, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
        };




        return ( 
        <div>
            <Doughnut data={graficodois} style={{flex:1}}/>        
        </div>
        )
    }}


  