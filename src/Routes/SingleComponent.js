import React, { Fragment } from "react";
import SingleProducts from "../Components/SingleProducts/SingleProducts";
import Nav from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/LoadingScreen/Loading";
const SingleComponent = () => {
  return (
    <Fragment>
      <Loading />
      <Nav />
      <SingleProducts />
      <Footer />
    </Fragment>
  );
};

export default SingleComponent;
