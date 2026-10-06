import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  return (
    <>
      <Navbar handleOrderPopup={() => setOrderPopup(true)} />
      <Outlet />
      <Footer />
      <OrderPopup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
      />
    </>
  );
};

export default Layout;
