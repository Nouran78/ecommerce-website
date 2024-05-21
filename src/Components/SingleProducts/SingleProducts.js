import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import './singleProduct.css'
import { useParams } from "react-router-dom";
import { cartSlice } from "../Redux/cartSlice";
const SingleProducts = () => {
  
  const [single, setsingle] = useState({});
  const {id} = useParams();
  console.log(useParams())
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setsingle(res.data))
      .catch((err) => console.log(err));
  });
  const dispatch=useDispatch()
  return (
    <Fragment>
      <div className="secondcontainer">
        {
               <div className="contimg">
<img src={single.image} alt=""/>

            <div className="singleProduct">
            <h1>title: {single.title}</h1>
                <h2>category:<h3>{single.category}</h3></h2>
                <h2>Description :<h3>{single.description}</h3></h2>
                <h2>price : $ {single.price}</h2>
                <button onClick={()=> dispatch(cartSlice.actions.addToCart())}> Add to cart</button>
              </div>
              
            </div>
        }
      </div>
    </Fragment>
  );
};

export default SingleProducts;
