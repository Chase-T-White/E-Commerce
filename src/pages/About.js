import React from "react";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const About = () => {
  return (
    <main>
      <PageHero title='about' />
      <div className='about page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            perspiciatis soluta cumque cum itaque natus suscipit excepturi
            consectetur delectus, nemo nihil modi? Perspiciatis ratione aliquam
            dolor perferendis, cum ipsa assumenda.
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;
