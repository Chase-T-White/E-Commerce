import React from "react";

const Footer = () => {
  return (
    <div className='wrapper'>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>ComfySloth</span>
      </h5>
      <h5>All rights reserved</h5>
    </div>
  );
};

export default Footer;
