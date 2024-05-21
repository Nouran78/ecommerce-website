import React, { Fragment } from "react";
import Products from "../Components/Products/Products";
import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import Loading from '../Components/LoadingScreen/Loading'

const ProductsComponent = () => {
  return (
    <Fragment>
      <Loading/>
      <Nav />
      <Products />
      <Footer />
    </Fragment>
  );
};

export default ProductsComponent;
