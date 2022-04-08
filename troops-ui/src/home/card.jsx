import React, { Component } from "react";

function getImageUrl(type, useDefault) {
  const prefix =
    window && window.imageUrlPrefix && !useDefault
      ? window.imageUrlPrefix + "/"
      : "";
  return "https://s.conceptjs.com/tni/" + prefix + type + ".png";
}


const imageUrl = getImageUrl("WHITE");
export default class TniCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const {
      type,
      text,
      size,
      onClick,
      draggable,
      disabled,
      idx,
      animateNew,
      animateDiscard,
      changeTabIndex,
      blackCard,
      ariaHidden,
      cardsInPlay,
      discarded
    } = this.props;
    this.text = "Hii Sridhar";
    // WAS const imageUrl = getImageUrl(type);
    return (
      <div>
        <img src={this.props.imageUrl} height="300" width="300"></img>
      </div>
    );
  };
}
