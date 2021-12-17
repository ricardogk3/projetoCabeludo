import React, {Component} from 'react';
import Card from "react-bootstrap/Card";


export default class List extends Component {
    render() {
        const {dados} = this.props    

        const newdata = dados.map( (data) =>{
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
        

        return ( 
        <div>
            {newdata}   
        </div>
        )
    }}


  