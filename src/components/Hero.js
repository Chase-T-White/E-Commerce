import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <div className='hero section-center'>
      <article className='content'>
        <h1>
          Design Your <br />
          Comfort Zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque
          provident aliquid distinctio debitis necessitatibus dolorum tempora
          ipsum cumque animi!
        </p>
        <Link to='/products' className='btn hero-btn'>
          Shop Now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' />
        <img src={heroBcg2} alt='person working' />
      </article>
    </div>
  );
};

export default Hero;
