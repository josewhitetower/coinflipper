import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      {
        side: "head",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Common_face_of_one_euro_coin.jpg/220px-Common_face_of_one_euro_coin.jpg"
      },
      {
        side: "tail",
        imgSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7xv_FqjpaCRF_m4cl391xXFX4Xbfiisnc9FsHAWFAFmB2FNZ"
      }
    ]
  };

  state = {
    flips: 0,
    tails: 0,
    heads: 0,
    currentCoin: this.props.coins[0],
    isFlipping: false
  };

  handleClick = () => {
    const randomIndex = Math.floor(Math.random() * this.props.coins.length);

    const newCoin = this.props.coins[randomIndex];

    this.setState({ isFlipping: true });

    setTimeout(() => {
      this.setState(state => {
        return {
          ...state,
          flips: state.flips + 1,
          tails: newCoin.side === "tail" ? state.tails + 1 : state.tails + 0,
          heads: newCoin.side === "head" ? state.heads + 1 : state.heads + 0,
          currentCoin: newCoin,
          isFlipping: false
        };
      });
    }, 3000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h2>Coin Flipper</h2>
        <Coin
          info={this.state.currentCoin}
          isFlipping={this.state.isFlipping}
        />
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.flips} flips, {this.state.tails} are teil and{" "}
          {this.state.heads} are heads
        </p>
      </div>
    );
  }
}
