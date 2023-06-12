import React from 'react'

const Cart = ({item,cPrice,id}) => {
  return (
    <div className='container'>
        <div className='container_index'>{id}</div>
        
        <img src=''/>
        <div className='container_title'>{item}</div>
        <div className='container_price'>{cPrice}</div>
        {/* <div className='container_date'>today</div> */}


    </div>
  )
}

export default Cart