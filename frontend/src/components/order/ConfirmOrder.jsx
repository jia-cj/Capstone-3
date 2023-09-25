import React from 'react';

const ConfirmOrder = () => {
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-12 col-lg-8 mt-5 order-confirm">
        <h4 className="mb-3">Shipping Info</h4>
        <p><b>Name:</b> Monkey D. Luffy</p>
        <p><b>Phone:</b> 222 202 1010</p>
        <p className="mb-4">
          <b>Address:</b> Grandline
        </p>
        <hr />
        <h4 className="mt-4">Your Cart Items:</h4>
        <hr />
        <div className="cart-item my-1">
          <div className="row">
            <div className="col-4 col-lg-2">
              <img
                src="../images/banana.jpg"
                alt="Lakatan"
                height="45"
                width="65"
              />
            </div>
            <div className="col-5 col-lg-6">
              <a href="#">Banana - Lakatan, Large</a>
            </div>
            <div className="col-3 col-lg-4 mt-4 mt-lg-0"> 
              <p>1 x 5.00 = <b>5.00Php</b></p> 
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-12 col-lg-3 my-4">
        <div id="order_summary">
          <h4>Order Summary</h4>
          <hr />
          <p>Subtotal: <span className="order-summary-values">$5.00</span></p> 
          <p>Shipping: <span className="order-summary-values">$25.00</span></p> 
          <p>Tax: <span className="order-summary-values">$0.00</span></p> 
          <hr />
          <p>Total: <span className="order-summary-values">$30.00</span></p> 
          <hr />
          <button id="checkout_btn" className="btn btn-primary btn-block">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
