import { createSlice } from "@reduxjs/toolkit";
import picOne from "./images/picOne.png";
import picTwo from "./images/picTwo.png";
import picThree from "./images/picThree.png";
import picFour from "./images/picFour.png";
import picFive from "./images/picFive.png";
import picSix from "./images/picSix.png";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cardsArray: [
      {
        goodsName: "Кровать TATRAN",
        goodsDescription:
          "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
        goodsPrice: 120000,
        initialGoodsPrice: 120000,
        goodsPhoto: picOne,
      },
      {
        goodsName: "Кресло VILORA",
        goodsDescription:
          "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
        goodsPrice: 21000,
        initialGoodsPrice: 21000,
        goodsPhoto: picTwo,
      },
      {
        goodsName: "Стол MENU",
        goodsDescription:
          "Европейский дуб - отличается особой прочностью и стабильностью.",
        goodsPrice: 34000,
        initialGoodsPrice: 34000,
        goodsPhoto: picThree,
      },
      {
        goodsName: "Диван ASKESTA",
        goodsDescription:
          "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
        goodsPrice: 68000,
        initialGoodsPrice: 68000,
        goodsPhoto: picFour,
      },
      {
        goodsName: "Кресло LUNAR",
        goodsDescription:
          "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
        goodsPrice: 40000,
        initialGoodsPrice: 40000,
        goodsPhoto: picFive,
      },
      {
        goodsName: "Шкаф Nastan",
        goodsDescription:
          "Мебель может быть оснащена разнообразными системами подсветки.",
        goodsPrice: 80000,
        initialGoodsPrice: 80000,
        goodsPhoto: picSix,
      },
    ],
    bagCards: [],
    totalPrice: 0,
  },
  reducers: {
    addCard: (state, action) => {
      let card = state.cardsArray.find(
        (card) => card.goodsName === action.payload
      );

      if (
        card &&
        !state.bagCards.some((bagCard) => bagCard.goodsName === card.goodsName)
      ) {
        state.bagCards = [...state.bagCards, { ...card, count: 1 }];
      } else {
        state.bagCards = [...state.bagCards];
      }

      console.log(state.bagCards);
    },
    sortCards: (state, action) => {
      if (action.payload === "Порядок: сперва дороже") {
        state.cardsArray = state.cardsArray.sort(
          (a, b) => b.goodsPrice - a.goodsPrice
        );
      } else if (action.payload === "Порядок: сперва дешевле") {
        state.cardsArray = state.cardsArray.sort(
          (a, b) => a.goodsPrice - b.goodsPrice
        );
      }
    },
    clearBag: (state, action) => {
      state.bagCards = [];
    },
    deleteFromBag: (state, action) => {
      state.bagCards = state.bagCards.filter(
        (card) => card.goodsName !== action.payload
      );
    },
    increaseCount: (state, action) => {
      const { index } = action.payload;
      const obj = state.bagCards[index];
      obj.count++;
      obj.goodsPrice = obj.initialGoodsPrice * obj.count;
    },
    decreaseCount: (state, action) => {
      const { index } = action.payload;
      const obj = state.bagCards[index];
      if (obj.count > 1) {
        obj.count--;
        obj.goodsPrice = obj.initialGoodsPrice * obj.count;
      }
    }
  },
});

export const { sortCards, addCard, clearBag, deleteFromBag, increaseCount,decreaseCount } =
  cardSlice.actions;

export default cardSlice.reducer;
