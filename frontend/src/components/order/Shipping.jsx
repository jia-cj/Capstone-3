import React, { useState } from 'react';

const Shipping = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('USA'); // Initialize with a default country

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Shipping Info:');
    console.log('Address:', address);
    console.log('City:', city);
    console.log('Phone No:', phone);
    console.log('Postal Code:', postalCode);
    console.log('Country:', country);

  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={handleSubmit}>
          <h1 className="mb-4">Shipping Info</h1>
          <div className="form-group">
            <label htmlFor="address_field">Address</label>
            <input
              type="text"
              id="address_field"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city_field">City</label>
            <input
              type="text"
              id="city_field"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_field">Phone No</label>
            <input
              type="phone"
              id="phone_field"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postal_code_field">Postal Code</label>
            <input
              type="number"
              id="postal_code_field"
              className="form-control"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country_field">Country</label>
            <select
              id="country_field"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="USA">USA</option>
            </select>
          </div>
          <button id="shipping_btn" type="submit" className="btn btn-block py-3">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
