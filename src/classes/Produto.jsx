import React, {Component} from 'react';

//criando uma classe que é componente
export default class Produto extends Component{
  constructor(props){
    super(props)//chama o construtor do Component
    this.state = {
      nome:'',
      qtde:0,
      valor: 0,
      total:0
    }
  }

  // e => evento ocorrido
  setNome(e){
    //vamos alterar o nome
    this.setState({
      nome: e.target.value //valor da caixa de texto
    })
  }
  // e => evento ocorrido
  setQtde(e){
    //vamos alterar a quatidade
    this.setState({
      qtde: e.target.value //valor da caixa de texto
    })
  }
  // e => evento ocorrido
  setValor(e){
    //vamos alterar o valor
    this.setState({
      valor: e.target.value //valor da caixa de texto
    })
  }

  calcular(){
    this.setState({
      total: this.state.qtde * this.state.valor
    })
    
  };
  

  //renderizar - mostrar - desenhar browser
  render(){
    const nome = this.state.nome;
    const qtde = this.state.qtde;
    const valor = this.state.valor;
    const total = this.state.total;
    

    return (
      <div>
        <div>
          <label htmlFor="">Nome do produto</label>
          <input type="text" value={nome} onChange={e => this.setNome(e)}/>
        </div>
        <div>
          <label htmlFor="">Quantidade do produto</label>
          <input type="number" value={qtde} onChange={e => this.setQtde(e)}/>
        </div>
        <div>
          <label htmlFor="">Preço do produto</label>
          <input type="number" value={valor} onChange={e => this.setValor(e)}/>
        </div>  
        <button onClick={() => this.calcular()}>Calcular</button>
        <div>
          <label htmlFor="">Resultado: {total}</label>
        </div>
      </div>
    )
  }
}