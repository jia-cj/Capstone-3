import React from 'react';

const OrderSuccess = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-6 mt-5 text-center">
        <img
          className="my-5 img-fluid d-block mx-auto"
          src="https://static.vecteezy.com/system/resources/previews/019/521/981/large_2x/green-check-mark-icon-with-circle-checkmark-illustration-free-vector.jpg"
          alt="Order Success"
          width=200 
          height=200
        />
        <h2>Your Order has been placed successfully.</h2>
        <a href="/order">Go to Orders</a>
      </div>
    </div>
  );
}

export default OrderSuccess;
