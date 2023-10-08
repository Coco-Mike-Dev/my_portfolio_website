import logo from "./Images/logo.png";
import React, { useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Menu = () => {
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(550); // Scrolling to About me Section.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div className="Menu">
      <button className="MenuItem">
        <a onClick={scrollToTop}>INTRO</a>
      </button>
      <button className="MenuItem">
        <a onClick={scrollTo}>ABOUT ME</a>
      </button>
      <button className="MenuItem">
        <a href="bb">MY SKILLS</a>
      </button>
      <button className="MenuItem">
        <a href="bb">RESUME</a>
      </button>
      <button className="MenuItem">
        <a href="bb">PROJECTS</a>
      </button>
      <button className="MenuItem">
        <a href="bb">CONTACT ME</a>
      </button>
      <div className="footer">
        <img src={logo} alt="logo" className="logo" />
        <p>Copyright © 2023 Debbuging Discoveries®. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Menu;
