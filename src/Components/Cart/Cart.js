import React, { Fragment } from "react";
import Nav from "../Navbar/Nav";
import Footer from '../Footer/Footer'
import { useSelector } from "react-redux";
import "./cart.css";
const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  return (
    <Fragment>
      <Nav />
      <section>
        {cartProducts.map((el) => (
          <div key={el.id} className="cart">
            <h2>category:{el.category}</h2>
            <img src={el.image} alt="" />           
            <h2>price:{el.price}</h2>
          </div>
        ))}
      </section>
      <Footer/>
    </Fragment>
  );
};

export default Cart;
