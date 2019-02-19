import React, { Component } from 'react'
import Product from '/Users/michaelbischoff/devmountain/sim/shelfies/src/component/Product/Product.js'

class Dashboard extends Component{
    constructor(props){
        super(props)

    }
        render(){
            const { inven } = this.props;
            
            
            return(
                <div>
                
            <ul>{inven.inven}</ul>
        
            
          <Product 
          key={inven.product_id}
          inven={inven}
          product_name={inven.product_name}
          price={inven.price}
          img={inven.imgurl}
          />
          </div>
            
            )
        }
}
export default Dashboard