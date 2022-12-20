import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BsCart3 } from "react-icons/bs";
import './Cart.css';
import Proudect from "../Proudect/Proudect";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Cart() {
  const selector = useSelector(state => state)

  let navigate = useNavigate()
  const [product, setProduct] = useState([]);
  const [isCart, setIsCart] = useState(false);

  useEffect(() => { getProuduct() }, [product])

  async function getProuduct() {
    let { data } = await axios.get("https://fakestoreapi.com/products")
    setProduct(data)
  }

  return <div>
    <h1>enjoy your shopping!</h1>
    <div className="row">
      <div class="col-8">
        <div className="disign">
          {
            product.map((p, index) => {
              return <div key={index}><Proudect p={p} /></div>
            })
          }
        </div>
      </div>
      <div class="col-4">
        <button className="cart" onClick={() => setIsCart(true)}>cart < BsCart3 /></button><br></br>
        {

          isCart ? selector.map((p, index) => {

            return <div className="cartshop" key={index}><img src={p.image}></img><p>Price: {p.price}$</p><p>{p.amount}</p><br></br></div>
          })
            : null

        }
      </div>

    </div>
    {/* 
    <Routes>
      <Route path="/shoppingcart" element={<ShoppingCart />} />
    </Routes> */}
  </div>

}
