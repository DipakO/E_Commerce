import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Style from "../Card/Card.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductDetails = () => {
  const [newData, setNewData] = useState([]);
  const [Qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((cardData) => setNewData(cardData));
  }, []);
  //   console.log(Qty)
  const Price = newData.price * Qty;

  const handleCheckOut = () => {
    Navigate(`/Payment/${Price}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className={Style.cards2}>
          <SkeletonTheme>
            <Skeleton width={400} duration={3} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className={Style.productDetails}>
          <img src={newData.image} alt="timepass" width={150} />
          <h4 style={{ width: "13rem" }}>{newData.title}</h4>
          <h5>{newData.category}</h5>
          <h5>Price - {Price}</h5>
          <div>
            <label style={{ fontSize: "20px" }}> Quantity :--</label>
            <select
              name="Quantity"
              id="Quantity"
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
              <option value="4">6</option>
              <option value="4">7</option>
              <option value="4">8</option>
              <option value="4">9</option>
              <option value="4">10</option>
            </select>
          </div>
          <button
            style={{
              backgroundColor: "red",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            Delete
          </button>
        </div>
      )}
      <button
        style={{
          backgroundColor: "red",
          marginLeft: "20px",
          marginTop: "10px",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        Empty Cart
      </button>
      <button
        onClick={handleCheckOut}
        style={{
          backgroundColor: "yellow",
          marginLeft: "20px",
          marginTop: "10px",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        CheckOut
      </button>
      <button
        style={{
          backgroundColor: "green",
          marginLeft: "20px",
          marginTop: "10px",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        AddMore
      </button>
      <h1 className={Style.totalPrice}>Total Price :- {Price}</h1>
    </div>
  );
};

export default ProductDetails;
