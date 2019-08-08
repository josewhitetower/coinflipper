import React from "react";

export default function Coin({ info, isFlipping }) {
  return (
    <div className="Coin">
      <img
        src={info.imgSrc}
        alt={info.side}
        className={isFlipping && "flipping"}
      />
    </div>
  );
}
