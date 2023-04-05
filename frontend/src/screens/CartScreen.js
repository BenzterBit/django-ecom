import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
  Form,
} from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  let qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartItems", cartItems);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = (id, qty) => {
    navigate(`/login?redirect=shipping`);
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((cartItem) => (
              <ListGroupItem>
                <Row>
                  <Col md={2}>
                    <Image
                      src={cartItem.image}
                      alt={cartItem.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={4}>
                    <Link to={`/product/${cartItem.product}`}>
                      {cartItem.name}
                    </Link>
                  </Col>
                  <Col md={2}>
                    <span>${cartItem.price}</span>
                  </Col>
                  <Col md={3}>
                    <Form.Control
                      as="select"
                      value={cartItem.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(cartItem.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(cartItem.countInStock).keys()].map((index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      key={cartItem.product}
                      onClick={() =>
                        removeFromCartHandler(cartItem.product, qty)
                      }
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;
