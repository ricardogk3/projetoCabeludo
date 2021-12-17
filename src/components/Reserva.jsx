// import logo from './logo.svg';
import '../App.css';
import data from '../dados.json';
import Card from "react-bootstrap/Card";
import React from 'react';
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
import { Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// configuraçoes dos gráfico
export const options = {
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
const anos = [...new Set(data.map(item => item.ano))].sort(); 
const labels = anos;

// separa todos os anos para poder contar a quantidade de carros repetidos no mesmo ano
var xanos = [];
xanos = (data.map(item => item.ano));

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

export const graficoum = {
  labels,
  datasets: [
    {
      label: 'Quantidade de carros listados por ano',
      data: result,
      backgroundColor: 'rgba(44, 99, 132, 0.7)',
    },
  ],
};

const newdata = data.map( (data) =>{
  return(
    <Card key={data.id}>
        <Card.Body style={{ display: "flex", alignItems: 'center', justifyContent: 'center',background:'#282c34',}}>
          <div style={{ display: "flex", width: '70%', color:'white',  border: '1px solid gray', margin:3,}}>
            <Card.Text style={{flex:1}}>{data.nome}</Card.Text>
            <Card.Text style={{flex:1}}>{data.marca}</Card.Text>
            <Card.Text style={{flex:1}}>{data.ano}</Card.Text>
            <Card.Text style={{flex:1}}>{data.cor}</Card.Text>
          </div>
        </Card.Body>
      </Card>
  )
})





// retira apenas a quantidade de anos que existem nos dados
const cores = [...new Set(data.map(item => item.cor))].sort(); 
const labelscor = cores;

// // separa todos os anos para poder contar a quantidade de carros repetidos no mesmo ano
var xcores = [];
xcores = (data.map(item => item.cor)).sort();

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
console.log(countscor)

// // trasnforma de objeto em array para poder exibir o gráfico 
var resultcor = [];
for (var key in countscor) {
  if (countscor.hasOwnProperty(key)) {
    resultcor.push(countscor[key]);
  }
}
console.log(resultcor)



export const graficodois = {
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

function App() {
  return (
    <div className="App">
      <header>
        <p>
          PAGE P/ O CHEFINHO CABELUDO
        </p>
      </header>
      <body>
        <div style={styles.c4}>
          <div style={styles.c3}>
            <Bar options={options} data={graficoum}  style={{flex:1, marginRight:10,}}/>
            <div style={styles.c5}>
              <p style={{color:'gray'}}> Cores dos carros listados</p>
              <Doughnut data={graficodois} style={{flex:1}} />
            </div>
          </div>
        </div>
        <div style={styles.c1}>
          <div style={styles.c2}>
            <p style={{flex:1}}>Nome</p>
            <p style={{flex:1}}>Marca</p>
            <p style={{flex:1}}>Ano</p>
            <p style={{flex:1}}>Cor</p>
          </div>
        </div>
        {newdata}        
      </body>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  c1:{
    display: "flex", 
    alignItems: 'center', 
    justifyContent: 'center',  
    color:'white',
    background:'#282c34',
    fontWeight:'bold',
  },
  c2:{
    display: "flex", 
    width: '70%', 
    color:'white',  
    border: '1px solid gray', 
    margin:5,
  },
  c3:{
    display: "flex",
    alignItems: 'center', 
    justifyContent: 'center',  
    width: '40%', 
    color:'white',  
    // border: '1px solid gray', 
    margin:5,
  },
  c4:{
    display: "flex", 
    alignItems: 'center', 
    justifyContent: 'center',  
    color:'white',
    // background:'#282c34',
    fontWeight:'bold',
    marginTop:30,
    marginBottom:30,
  },
  c5:{
    height:"20%"
  },

};

export default App;

