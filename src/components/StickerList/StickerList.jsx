import React, { Component } from "react";
import styled from "styled-components";
import Choice from "../Choice/Choice";
import Sticker from "../Sticker/Sticker";

const StickersStyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  li {
    border: 4px solid #ffffff;
    border-radius: 70px;
    background-color: #ffa7e4;
    cursor: pointer;
  }
`;

class StickersList extends Component {
  state = {
    stickers: this.props.stickers,
    stickerName: "",
  };

  showSticker = (stickerName) => {
    this.setState({ stickerName });
  };

  render() {
    const { stickers, stickerName } = this.state;
    return (
      <>
        <StickersStyledList>
          {stickers.map((sticker) => (
            <li
              key={sticker.id}
              onClick={() => this.showSticker(sticker.label)}
            >
              <Sticker stickerUrl={sticker.img} stickerLabel={sticker.label} />
            </li>
          ))}
        </StickersStyledList>
        <Choice imgLabel={stickerName} />
      </>
    );
  }
}

export default StickersList;
