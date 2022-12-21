import React, { useState } from "react";
import CardDemo from "../components/Card";
import { CardState } from "../context/Context";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import { AiFillDelete } from "react-icons/ai";
import "./Style.css";
import { Button } from "react-bootstrap";

const Card = () => {
  const [text, setText] = useState("");

  const {
    state: { cart },
    dispatch,
    data,
  } = CardState();

  return (
    <div>
      <div className="header">
        <div className="ss">
          <input
            className="search"
            type="search"
            placeholder="Search here..."
            onChange={(e) => setText(e.target.value)}
          />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <MdShoppingCart width={"1rem"} color={"red"} /> {cart.length}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {cart.length > 0 ? (
                <>
                  {cart.map((selectedProduct, i) => {
                    return (
                      <span className="selectedProduct">
                        <img
                          className="cartImage"
                          src={selectedProduct.image}
                          alt="product"
                          width={70}
                        />
                        <div className="cartItemDetails">
                          <span>{selectedProduct.title}</span>
                          <span>{selectedProduct.price}</span>
                        </div>

                        {/* <h6 style={{ marginRight: "1rem" }}>
                          {selectedProduct.category}
                        </h6> */}
                        <AiFillDelete
                          fontSize="30px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: selectedProduct,
                            })
                          }
                        ></AiFillDelete>
                      </span>
                    );
                  })}
                  <Link to="/Cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span>Card is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Link className="login" to="/login">
          Login
        </Link>
        <Link className="signup" to="/SignUp">
          SignUp
        </Link>
      </div>
      <div className="grid">
        {data.map((product, i) => {
          return <CardDemo product={product} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Card;
