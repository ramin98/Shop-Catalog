import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Интерьер.
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="catalog-link" to="/">Каталог</Link>
            <Link className="catalog-link-img" to="/"></Link>
          </li>
          <li>
            <Link className="bag-link" to="/bag">Корзина</Link>
            <Link className="bag-link-img" to="/bag"></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
