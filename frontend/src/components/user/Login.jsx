import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post('https://backend-capstone-3-ggfe.onrender.com/api/v1/login', { email, password });
      console.log(response.data); 
      setData({ email: '', password: '' });
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
     
    }
  };

  return (
    <Fragment>
      <MetaData title={'Login'} />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={(e) => loginUser(e)}>
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                value={data.password}
                required 
              />
            </div>

            <Link to="/password/forgot" className="float-right mb-4">
              Forgot Password?
            </Link>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              LOGIN
            </button>

            <Link to="/register" style={{ display: 'block', textAlign: 'center', margin: '0 auto', marginTop: '2rem' }}>
              Register here!
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
