import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            product_name: '',
            price: 0,
            imgurl: ''
        }
    }
    handleImgurl(val){
        this.setState({
            imgurl: val
        })
    }
    handleName(val){
        this.setState({
            product_name: val
        })
    }
    handlePrice(val){
        this.setState({
            price: val
        })
    }
    handleCancel(){
        this.setState({
            imgurl: '',
            product_name: '',
            price: 0
        })
    }
    postProduct(){
        const { product_name, price, imgurl } = this.state;
        axios.post('/api/product', {product_name, price, imgurl}).then(res => {
            this.setState({
                inventory: res.data,
                product_name: '',
                price: 0,
                imgurl: ''
            })
        })
    }
    render(){
        return(
            <div>
            <input
            type="text"
            placeholder="Name"
            value={this.state.product_name}
            onChange={e => this.handleName(e.target.value)}
            ></input>
            <input
              type="number"
              placeholder="Price"
              value={this.state.price}
              onChange={e => this.handlePrice(e.target.value)}
              ></input>
            <input 
             type="text"
             placeholder="Url"
             value={this.state.imgurl}
             onChange={e => this.handleImgurl(e.target.value)}></input>
              <button
              onClick={() => this.handleCancel()}>Cancel</button>
              <button onClick={() => this.postProduct()}>Add To Inventory</button>
          </div>
        )
    }
}