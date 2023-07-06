import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortCards } from "./cardSlice";
import Cards from "./Cards";

function Catalog() {
  const cards = useSelector((state) => state.cards.cardsArray);
  const dispatch = useDispatch();

  const selectHandler = (ev) => {
    dispatch(sortCards(ev.target.value));
  };

  return (
    <main className="catalog">
      <div className="select-container">
        <select onChange={selectHandler}>
          <option value="Порядок: сперва дороже">Порядок: сперва дороже</option>
          <option value="Порядок: сперва дешевле">
            Порядок: сперва дешевле
          </option>
        </select>
      </div>
      <ul className="cards-list">
        {cards.map((card) => (
          <Cards key={card.goodsName} {...card} />
        ))}
      </ul>
    </main>
  );
}

export default Catalog;
