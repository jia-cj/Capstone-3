import React from 'react'

const OrderStatus = () => {
  return (
    <div className="checkout-progress d-flex justify-content-center mt-5">
        <div className="triangle2-completed" />
        <div className="step complete">Shipping Info</div>
        <div className="triangle-completed" />
        <div className="triangle2-active" />
        <div className="step active">Payment</div>
        <div className="triangle-active" />
        <div className="triangle2-incomplete" />
        <div className="step incomplete">Confirm Order</div>
        <div className="triangle-incomplete" />
    </div>
  )
}

export default OrderStatus
