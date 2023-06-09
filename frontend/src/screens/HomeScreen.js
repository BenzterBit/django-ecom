import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { listProducts } from "../actions/productActions";
function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest products</h1>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
