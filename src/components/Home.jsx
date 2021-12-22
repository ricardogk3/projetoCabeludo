import React, {Component} from 'react';
import Graficdois from './Graficdois';
import Graficum from './Graficum';
import List from './List';
import dados from '../dados';

let dadosLocais = dados
let allDados2 = dados
// console.log(dadosLocais)

class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    var allDados = [];

    var escrito = event.target.value;
    const local = Object.values(dadosLocais);

    for(var key in local) {
        if(local[key].nome.includes(escrito) || local[key].marca.includes(escrito) ){
          allDados.push({
              nome:local[key].nome,
              marca:local[key].marca,
              ano:local[key].ano,
              cor:local[key].cor
          })
        }

        else if(escrito == ""){
            allDados = dadosLocais
        }  
    }
    allDados2 = allDados
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
      return (
          <div>
            <header>
              <h1 style={styles.title}>
                PAGE P/ O CHEFINHO CABELUDO
              </h1>
            </header>
            <body>
              <form onSubmit={this.handleSubmit} style={styles.pesq1}>
                <label>
                  <input style={styles.pesq2} type="text" value={this.state.value} placeholder='Pesquisa...' onChange={this.handleChange} />
                </label>
              </form>
              <div style={styles.c4}>
                  <div style={styles.c3}>
                    {/* aqui é o gráfico1 */}
                  <Graficum dados = {allDados2} style={{ marginRight:10}}/>
                  </div>
                  <div style={styles.c5}>
                    <p style={{color:'gray', display: "flex", alignItems: 'center', justifyContent: 'center', }}> 
                      Cores dos carros listados
                    </p>
                    {/* aqui é o gráfico2 */}
                    <Graficdois dados = {allDados2}/>
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
            {/* aqui é a lista */}
            <List dados = {allDados2}/>
          </body>
        </div>
    
      );
  }
}



const styles = {
    container: {
      margin:0,
      flex: 1,
      // background:'#282c34',
    },
    title:{
      display: "flex", 
      alignItems: 'center', 
      justifyContent: 'center',  
      color: 'Blue',
      fontSize: 50,
      fontWeight: 'bold',
      margin: 30,
      fontFamily: 'MMA Champ',
    },
    pesq1:{
      display: "flex", 
      alignItems: 'center', 
      justifyContent: 'center',  
    },
    pesq2:{ 
      fontSize: 15,
      fontWeight: 'bold',
      margin: 5,
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
      // border: '1px solid gray', 
      // margin:5,
    },
    c3:{
      // display: "flex",
      // alignItems: 'center', 
      // justifyContent: 'center',  
      width: '40%', 
      color:'white',  
      // border: '1px solid gray', 
      // margin:5,
    },
    c4:{
      display: "flex", 
      flexDirection:"row",
      alignItems: 'center', 
      justifyContent: 'center',  
      color:'white',
      // // background:'#282c34',
      fontWeight:'bold',
      marginTop:30,
      marginBottom:30,
    },
    c5:{
      // height:"20%"
    },
  
  };


export default Home;