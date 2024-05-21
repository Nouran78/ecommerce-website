import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './products.css'
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { cartSlice } from "../Redux/cartSlice";
const Products = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setproducts(res.data))
      .catch((err) => console.log(err));
  });
  const dispatch=useDispatch()
  return (
    <Fragment>
      <div className="Productcontainer">
        {
            products.map((el)=>(
                <div key={el.id} className="users">
                    <h2>category:{el.category}</h2>
                    <img src={el.image} alt=""/>
                    <h2>price:{el.price}</h2>
                 <Link  to= {`${el.id}`}>Read More</Link>
                 < button onClick={()=>dispatch(cartSlice.actions.addToCart(el))}>Add to cart</button>
                 
                
                </div>
            ))
        }
      </div>
    </Fragment>
  );
};

export default Products;
