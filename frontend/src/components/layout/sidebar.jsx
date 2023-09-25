import React from 'react';

const Sidebar = () => {
  return (
    <div className="row">
      <div className="col-2">
        <div className="sidebar-wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <li>
                <a href="#">
                  <i className="fas fa-tachometer-alt" /> Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#productSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fab fa-product-hunt" /> Products
                </a>
                <ul className="collapse list-unstyled" id="productSubmenu">
                  <li>
                    <a href="#">
                      <i className="fas fa-clipboard-list" /> All
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-plus" /> Create
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-shopping-basket" /> Orders
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-users" /> Users
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-sign-out" aria-hidden="true" /> Sign Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
