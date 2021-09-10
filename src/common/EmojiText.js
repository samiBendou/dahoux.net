import React from "react";
import Emoji from "a11y-react-emoji";

const EmojiText = (props) => (
  <h2>
    <Emoji symbol={props.symbol} />
    <br />
    {props.children}
  </h2>
);

export default EmojiText;
