import React from 'react'

function Product(props){
    return(
      <ul>
          <span>Name: {props.product_name} Price: {props.price} Img: {props.img}</span>
      </ul>
    )
}

export default Product