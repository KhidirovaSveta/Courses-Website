import React from "react";
import DetailsHeader from "../../components/details-header";

const Basket = ({ basket, setBasket }) => {
  return (
    <div>
      <DetailsHeader/>
      {basket.map((bas) => {
        return (
          <>
            <p>{bas.name}</p>
          </>
        );
      })}
    </div>
  );
};

export default Basket;
