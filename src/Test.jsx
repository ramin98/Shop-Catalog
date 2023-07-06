import React, { useState } from 'react';

// Компонент товара
const Product = ({ name, price, image, addToCart }) => {
  const handleClick = () => {
    addToCart({ name, price, image });
  };

  return (
    <div className="product">
      <img src={image} alt={name} onClick={handleClick} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

// Компонент каталога товаров
const ProductCatalog = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 10, image: 'product1.jpg' },
    { name: 'Product 2', price: 20, image: 'product2.jpg' },
    // Другие товары...
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    let sortedProducts = [...products];

    if (sortValue === 'cheap') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'expensive') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="">Порядок</option>
        <option value="cheap">Сперва дешевле</option>
        <option value="expensive">Сперва дороже</option>
      </select>

      <div className="product-list">
        {products.map((product, index) => (
          <Product key={index} {...product} addToCart={addToCart} />
        ))}
      </div>

      <Cart items={cart} />
    </div>
  );
};

// Компонент корзины
const Cart = ({ items }) => {
  const [current, setCurrent] = useState(1);
  const min = 1;
  const max = 10;

  const handleIncrement = () => {
    if (current < max) {
      setCurrent(current + 1);
    }
  };

  const handleDecrement = () => {
    if (current > min) {
      setCurrent(current - 1);
    }
  };

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Корзина</h2>
      <div>Текущее количество: {current}</div>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <div>Итоговая стоимость: {totalPrice}</div>
      {/* Другие элементы корзины */}
    </div>
  );
};

export default ProductCatalog;