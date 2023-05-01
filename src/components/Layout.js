import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Layout = () => (
  <ul className="links">
    <li>
      <Link className="logo" to="/">
        Bookstore CMS
      </Link>
    </li>
    <li>
      <Link className="link" to="/">
        Books
      </Link>
    </li>
    <li>
      <Link className="link" to="/categories">
        Catagories
      </Link>
    </li>
  </ul>
);

export default Layout;
