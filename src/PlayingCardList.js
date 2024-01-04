import React, { useState } from "react";
import useAxios from "./hooks/useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
const DRAW_CARD_URL = "https://deckofcardsapi.com/api/deck/new/";
function CardTable() {
  const [cards, addCard, resetCards] = useAxios(DRAW_CARD_URL);
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard("draw")}>Add a playing card!</button>
        <button onClick={() => resetCards()}>Reset Card List</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
