import React, { useState } from 'react';

const ProcessOrder = () => {
  const [status, setStatus] = useState('Processing'); // Initialize with a default status

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    console.log(`Updating status to: ${status}`);
  };

  return (
    <div className="row d-flex justify-content-around">
      <div className="col-12 col-lg-7 order-details">
        <h1 className="my-5">Order # 4543f34f545</h1>
        <h4 className="mb-4">Shipping Info</h4>
        <p><b>Name:</b> Monkey D. Luffy</p>
        <p><b>Phone:</b> 222 202 1010</p>
        <p className="mb-4"><b>Address:</b> Address of user</p>
        <p><b>Amount:</b> $100</p>
        <hr />
        <h4 className="my-4">Payment</h4>
        <p className="greenColor"><b>PAID</b></p>
        <h4 className="my-4">Stripe ID</h4>
        <p className="greenColor"><b>stripe_3458349584985</b></p>
        <h4 className="my-4">Order Status:</h4>
        <p className="greenColor"><b>Delivered</b></p>
        <h4 className="my-4">Order Items:</h4>
        <hr />
        <div className="cart-item my-1">
          <div className="row my-5">
            <div className="col-4 col-lg-2">
              <img src="image-source-url" alt="Lettuce" height="45" width="65" />
            </div>
            <div className="col-5 col-lg-5">
              <a href="#">Lettuce</a>
            </div>
            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
              <p>$100</p>
            </div>
            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
              <p>2 Piece(s)</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-12 col-lg-3 mt-5">
        <h4 className="my-4">Status</h4>
        <div className="form-group">
          <select className="form-control" name="status" value={status} onChange={handleStatusChange}>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button className="btn btn-primary btn-block" onClick={handleUpdateStatus}>
          Update Status
        </button>
      </div>
    </div>
  );
};

export default ProcessOrder;
