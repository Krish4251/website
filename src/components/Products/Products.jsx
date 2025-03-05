import React from 'react'
import './Products.css'
import Product_1 from '../../assets/Product_1.jpg'
import Product_2 from '../../assets/Product_2.jpg'
import Product_3 from '../../assets/Product_3.jpg'
const Products = () => {
  return (
    <div className='products'>
      <div className="product">
        <img src={Product_1} alt="" />
        <div className="caption">
            <p>Crane 1</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_2} alt="" />
        <div className="caption">
            <p>Crane 2</p>
        </div>
      </div>
      <div className="product">
        <img src={Product_3} alt="" />
        <div className="caption">
            <p>Crane 3</p>
        </div>
      </div>
    </div>
  )
}

export default Products
