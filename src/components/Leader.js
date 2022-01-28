import React from "react";
// import Img from "../images/desktop/image-interactive.jpg";

function Leader() {
  return (
    <>
      <section className="interactive">
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/images/desktop/image-interactive.jpg"
            }
            alt="vr-img"
          />
        </div>

        <div className="interactive-text">
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  );
}

export default Leader;
