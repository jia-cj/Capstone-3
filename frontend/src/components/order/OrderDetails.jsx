import React from 'react';

const OrderDetails = () => {
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-12 col-lg-8 mt-5 order-details">
        <h1 className="my-5">Order # 4543f34f545</h1>
        <h4 className="mb-4">Shipping Info</h4>
        <p><b>Name:</b> Monkey D. Luffy</p>
        <p><b>Phone:</b> 222 202 101</p>
        <p className="mb-4"><b>Address:</b> Address of user</p>
        <p><b>Amount:</b> 100Php</p>
        <hr />
        <h4 className="my-4">Payment</h4>
        <p className="greenColor"><b>PAID</b></p>
        <h4 className="my-4">Order Status:</h4>
        <p className="greenColor"><b>Delivered</b></p>
        <h4 className="my-4">Order Items:</h4>
        <hr />
        <div className="cart-item my-1">
          <div className="row my-5">
            <div className="col-4 col-lg-2">
              
              <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/319725_1100-800x825.jpg" alt="Lettuce" height={45} width={65} />
            </div>
            <div className="col-5 col-lg-5">
              <a href="#">Lettuce</a>
            </div>
            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
              <p>100Php</p>
            </div>
            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
              <p>2 Piece(s)</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default OrderDetails;
