import React from "react";

const Home = () => {
  return (
    <div className="wrapper-home">
      <div className="text-center">
        <img
          className="img-fluid"
          src={__dirname + "images/banner.png"}          
          alt="welcome"
        />
      </div>
    </div>
  );
};

export default Home;
