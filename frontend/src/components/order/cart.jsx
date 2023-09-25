import React, { Fragment, useState } from 'react';
import { Link } from 'react-bootstrap';

const Cart = () => {
  
  const [quantity, setQuantity] = useState(1);
  const itemPrice = 5.00; // Price per item

 
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

 
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
  const subtotal = (quantity * itemPrice).toFixed(2);
  const estimatedTotal = (subtotal).toFixed(2);

  return (
    <Fragment>
      <h2 className="mt-5">Your Cart: <b>{quantity} item{quantity !== 1 ? 's' : ''}</b></h2>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
          <hr />
          <div className="cart-item">
            <div className="row">
              <div className="col-4 col-lg-3">
                <img src="../images/banana.jpg" alt="Lakatan" height="90" width="115" />
              </div>

              <div className="col-5 col-lg-3">
                <Link to="#">Banana - Lakatan, Large FHD</Link>
              </div>

              <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                <p id="cart_item_price">{itemPrice.toFixed(2)} Php</p>
              </div>

              <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                <div className="stockCounter d-inline">
                  <button className="btn btn-danger minus" onClick={decreaseQuantity}>-</button>
                  <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                  <button className="btn btn-primary plus" onClick={increaseQuantity}>+</button>
                </div>
              </div>

              <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                <i id="delete_cart_item" className="fa fa-trash btn btn-danger"></i>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>Subtotal: <span className="order-summary-values">{quantity} (Pcs)</span></p>
            <p>Est. total: <span className="order-summary-values">{estimatedTotal} Php</span></p>
            <hr />
            <button id="checkout_btn" className="btn btn-primary btn-block">Check out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
