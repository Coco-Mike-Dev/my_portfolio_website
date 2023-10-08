import React from "react";
import Typewriter from "typewriter-effect";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  const Phrases = (
    <Typewriter
      options={{
        strings: [
          "Welcome to my portfolio Website ",
          "Kindly leave a comment in the comment section",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );

  return (
    <div className="Title">
      <div className="innerContainer">
        <div className="phrase">
          <h1>{Phrases}</h1>
        </div>

        <div className="AboutMe">
          <div className="AboutMeInnerContainer">
            <div className="MyName">
              <h1 className="icon">Name</h1>
              <h1>Michael Njenga</h1>
            </div>
          </div>

          <div className="AboutMeInnerContainer">
            <div className="MyAge">
              <h1 className="icon">Age</h1>
              <h1>28 Years</h1>
            </div>
          </div>

          <div className="AboutMeInnerContainer">
            <div className="MySex">
              <h1 className="icon">Sex</h1>
              <h1>Male</h1>
            </div>
          </div>

          <div className="AboutMeInnerContainer">
            <div className="MyNationality">
              <h1 className="icon">Nationality</h1>
              <h1> Kenyan</h1>
            </div>
          </div>

          <div className="AboutMeInnerContainer">
            <div className="MyPhone">
              <h1 className="icon">Phone</h1>
              <h1>+254713413553</h1>
            </div>
          </div>

          <div className="AboutMeInnerContainer">
            <div className="MyEmail">
              <h1 className="icon">Email</h1>
              <h1> MichaelNganga09@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
