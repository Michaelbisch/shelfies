import React, { Component } from 'react';
import './App.css';
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import Dashboard from './component/Dashboard/Dashboard'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state ={
      inventory: []
    }
  }
  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      console.log(res.data)
      this.setState({
        inventory: res.data
      })
    })
  }
 
  render() {
    return (
      <div className="App">
        <Header />
        <Form 
        inventory={this.state.inventory}
        componenetDidMount={this.componentDidMount}
        />
        <ul>
          {
            this.state.inventory.map(inven => {
              return( 
              <Dashboard 
              key={inven.product_id}
              inven={inven}
              product_name={inven.product_name}
              price={inven.price}
              img={inven.imgurl}
              />
              )
            })
          }
            </ul>
      </div>
          );
  }
}

export default App;
