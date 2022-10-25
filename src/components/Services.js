import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <div className='services'>
      <div className='section-center'>
        <article className='header'>
          <h3>
            Custom Furniture <br />
            Built For You
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            nulla, expedita consequatur distinctio nemo labore sed vitae nostrum
            repellat accusantium.
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            return (
              <article key={service.id} className='service'>
                <span className='icon'>{service.icon}</span>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
