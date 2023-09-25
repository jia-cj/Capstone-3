import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 text-center">
          <img src="" alt="User Avatar" className="rounded-circle img-fluid avatar" />
          <button className="btn btn-primary mt-3">Edit Profile</button>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <h2 className="mb-4">My Profile</h2>
          <div className="profile-info">
            <h4>Full Name</h4>
            <p>test test</p>
          </div>
          <div className="profile-info">
            <h4>Email Address</h4>
            <p>test@gmail.com</p>
          </div>
          <button className="btn btn-danger btn-block mt-4">My Orders</button>
          <button className="btn btn-primary btn-block mt-3">Change Password</button>
          <button className="btn btn-success btn-block mt-3">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
