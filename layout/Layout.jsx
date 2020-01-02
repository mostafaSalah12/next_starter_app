import React, { Fragment } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
