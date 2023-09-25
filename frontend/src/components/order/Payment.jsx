import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Payment Data:');
    console.log('Card Number:', cardNumber);
    console.log('Card Expiry:', cardExpiry);
    console.log('Card CVC:', cardCVC);

    // Reset the form or handle redirection to a success page
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={handleSubmit}>
          <h1 className="mb-4">Card Info</h1>
          <div className="form-group">
            <label htmlFor="card_num_field">Card Number</label>
            <input
              type="text"
              id="card_num_field"
              className="form-control"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card_exp_field">Card Expiry</label>
            <input
              type="text"
              id="card_exp_field"
              className="form-control"
              value={cardExpiry}
              onChange={(e) => setCardExpiry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card_cvc_field">Card CVC</label>
            <input
              type="text"
              id="card_cvc_field"
              className="form-control"
              value={cardCVC}
              onChange={(e) => setCardCVC(e.target.value)}
              required
            />
          </div>
          <button id="pay_btn" type="submit" className="btn btn-block py-3">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
