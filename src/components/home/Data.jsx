import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Vasyl Zaturskyi</h1>
      <h3 className="home__subtitle">Carpenter/Joiner</h3>
      <p className="home__description">
        I'm carpenter/joiner with more than 13 years of professional experience
        based in London, and I'm very passionate and dedicated to my work.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
      </a>

      {/* <svg className="send"></svg> */}
    </div>
  );
};

export default Data;
