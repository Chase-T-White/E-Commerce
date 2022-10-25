import React from "react";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off!</h3>
        <div className='content'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sint sapiente dolor quaerat, eius voluptates placeat. Consequatur
            dolores at beatae.
          </p>
          <form action='' className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
