import React from "react";
import bag from "./images/bag.svg";
import heart from "./images/heart.svg";
import { addCard } from "./cardSlice";
import { useDispatch } from "react-redux";

function Cards({ goodsName, goodsDescription, goodsPrice, goodsPhoto, }) {
  const dispatch = useDispatch();

  const bagHandler = (name) => {
    dispatch(addCard(name));
  };

  return (
    <>
      <li className="card-item">
        <div className="card-image-div">
          <img className="card-image" src={goodsPhoto} alt="card-pic" />
          <div>
            <img onClick={() => bagHandler(goodsName)} src={bag} alt="bag" />
            <img src={heart} alt="heart" />
          </div>
        </div>
        <p className="card-name">{goodsName}</p>
        <p className="card-description">{goodsDescription}</p>
        <p className="card-price">{goodsPrice} руб</p>
      </li>
    </>
  );
}

export default Cards;
