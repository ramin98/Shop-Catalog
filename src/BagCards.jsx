import React from "react";
import { deleteFromBag } from "./cardSlice";
import { useDispatch } from "react-redux";

function BagCards(props) {
  const dispatch = useDispatch();

  const deleteGoods = (name) => {
    dispatch(deleteFromBag(name));
  };

  return (
    <>
      <hr />
      <li className="bag-card-item">
        <div className="bag-card-description">
          <img className="card-image" src={props.goodsPhoto} alt="card-pic" />
          <div className="card-item">
            <p className="card-name">{props.goodsName}</p>
            <p className="card-description">{props.goodsDescription}</p>
            <p className="bag-card-price card-price">{props.initialGoodsPrice} руб</p>
            <div className="delete-favorite">
              <span>Избранные</span>
              <span onClick={() => deleteGoods(props.goodsName)}>Удалить</span>
            </div>
          </div>
        </div>
        <div className="counter">
          <input type="number" disabled value={props.count} />
          <div className="counter-pointer">
            <span
              onClick={() => {
                props.handleIncreaseCount(props.index);
              }}
            >
              ^
            </span>
            <span
              onClick={() => {
                props.handleDecreaseCount(props.index);
              }}
            >
              ^
            </span>
          </div>
        </div>
      </li>
    </>
  );
}

export default BagCards;
