import React, { useState } from 'react';

const NewPassword = () => {
  const [passwordData, setPasswordData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = passwordData;

    if (password !== confirmPassword) {
      
      console.error('Passwords do not match');
    } else {
      
      console.log('New password:', password);
      
    }
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={handleSubmit}>
          <h1 className="mb-3">New Password</h1>
          <div className="form-group">
            <label htmlFor="password_field">Password</label>
            <input
              type="password"
              id="password_field"
              name="password"
              className="form-control"
              value={passwordData.password}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password_field">Confirm Password</label>
            <input
              type="password"
              id="confirm_password_field"
              name="confirmPassword"
              className="form-control"
              value={passwordData.confirmPassword}
              onChange={handleChange}
              required 
            />
          </div>
          <button
            id="new_password_button"
            type="submit"
            className="btn btn-block py-3"
          >
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
