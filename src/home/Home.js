import React from "react";
import "../scss/Home.scss";
import LinksBar from "../common/LinksBar";
import ProfilePicture from "./sami2.jpg"; // gives image path
import Emoji from "a11y-react-emoji";

const Home = (props) => {
  const data = props.data;
  return (
    <div id="home">
      <div id="home-header">
        <h1 className="text-header">
          Hi I'm <em>Sami</em> ! <Emoji symbol="🙂️" />
        </h1>
      </div>
      <div id="home-inner">
        <div id="home-first">
          <div>
            <img className="home-thumbnail" src={ProfilePicture} alt="profile thumbnail" />
          </div>

          <div id="home-links">
            <LinksBar data={data} />
          </div>
        </div>

        <div id="home-second">
          <h2>
            <Emoji symbol="🏗️" />
            <br />I am an <em>engineer</em> fascinated about technology and how it <em>transforms the world</em> !
          </h2>
          <h2>
            <Emoji symbol="🚀️" />
            <br />I love to <em>build stuff</em> and take part in <em>innovative</em> and <em>challenging</em> projects.
          </h2>
          <h2>
            <Emoji symbol="🎓️" />
            <br />I studied <em>electronics</em> and <em>software</em> engineering among many other disciplines.
          </h2>
          <h2>
            <Emoji symbol="🖌️" />
            <br />
            When I am not working on something, I do <em>music</em>, <em>photo</em> and <em>rollerblading</em>.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
