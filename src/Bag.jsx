import React, { useEffect, useState, useCallback } from "react";
import BagCards from "./BagCards";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { clearBag, decreaseCount, increaseCount } from "./cardSlice";
import { useDispatch } from "react-redux";

function Bag() {
  let cards = useSelector((state) => state.cards.bagCards);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncreaseCount = (index) => {
    dispatch(increaseCount({ index }));
    getTotalPrice();
  };

  const handleDecreaseCount = (index) => {
    dispatch(decreaseCount({ index }));
    getTotalPrice();
  };
  const getTotalPrice = useCallback(() => {
    let sum = 0;
    cards.forEach((item) => {
      sum += item.goodsPrice;
    });
    setTotalPrice(sum);
  },[cards])

  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);

  return (
    <main className="bag">
      <div className="goods-container">
        <div className="goods-count">
          <p>Товар</p>
          <p>К-во</p>
        </div>
        <ul className="bag-cards-list">
          {cards.map((card, index) => (
            <BagCards
              key={index}
              {...card}
              handleIncreaseCount={handleIncreaseCount}
              handleDecreaseCount={handleDecreaseCount}
              index={index}
              getTotalPrice={getTotalPrice}
            />
          ))}
        </ul>
        <div className="nav-buttons">
          <button
            onClick={() => {
              dispatch(clearBag());
            }}
          >
            Очистить корзину
          </button>
          <button onClick={() => navigate("/")}>Продолжить покупки</button>
        </div>
      </div>
      <div className="form-container">
        <p className="order">Оформление заказа</p>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <input type="text" placeholder="Имя Фамилия" />
          <input type="text" placeholder="+ 7 904 000 80 80" />
          <input type="text" placeholder="Адрес доставки" />
          <p className="total">Итого: {totalPrice}</p>
          <button type="submit">Оформить заказ</button>
        </form>
      </div>
    </main>
  );
}

export default Bag;
