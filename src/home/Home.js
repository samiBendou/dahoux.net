import React from "react";
import "../scss/Home.scss";
import { LinksBar } from "../common/buttons";
import ProfilePicture from "./sami2.jpg"; // gives image path
import Emoji from "a11y-react-emoji";
import { EmojiText } from "../common/texts";

const Home = (props) => {
  const data = props.data;
  return (
    <section id="home">
      <div className="first">
        <h1 className="header">
          Hi I&#39; m <em>Sami</em> ! <Emoji symbol="🙂️" />
        </h1>
        <img className="thumbnail" src={ProfilePicture} alt="profile thumbnail" />
        <LinksBar data={data} />
      </div>

      <div className="second">
        <EmojiText symbol="🏗️">
          I am an <em>engineer</em> fascinated about technology and how it <em>transforms the world</em> !
        </EmojiText>
        <EmojiText symbol="🚀️">
          I love to <em>build stuff</em> and take part in <em>innovative</em> and <em>challenging</em> projects.
        </EmojiText>
        <EmojiText symbol="🎓️">
          I studied <em>electronics</em> and <em>software</em> engineering among many other disciplines.
        </EmojiText>
        <EmojiText symbol="🖌️">
          When I am not working on something, I do <em>music</em>, <em>photo</em> and <em>rollerblading</em>.
        </EmojiText>
      </div>
    </section>
  );
};

export default Home;
