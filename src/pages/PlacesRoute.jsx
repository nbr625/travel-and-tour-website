import React from "react";
import Places from "../components/Places/Places";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const PlacesRoute = () => {
  const [orderPopup, setOrderPopup] =
    React.useState(false);

  const [
    selectedDestination,
    setSelectedDestination,
  ] = React.useState("");

  const handleOrderPopup = (destination) => {
    setSelectedDestination(destination);
    setOrderPopup(true);
  };

  return (
    <main className="pt-16">
      <Places handleOrderPopup={handleOrderPopup} />

      <OrderPopup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        selectedDestination={selectedDestination}
      />
    </main>
  );
};

export default PlacesRoute;
