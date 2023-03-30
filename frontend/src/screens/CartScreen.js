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
import { addToCart } from "../actions/cartActions";

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
  return <div>CartScreen</div>;
}

export default CartScreen;
