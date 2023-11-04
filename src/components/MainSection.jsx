import React from "react";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="main-content">
      <div className="content-section">
        <h1 className="title">YOUR FEET DESERVE THE BEST</h1>
        <p className="about">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="button">
          <button className="red-btn">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <p>Also Available On</p>
        <a href="https://www.flipkart.com/" target="_blank">
          <img src="/images/flipkart.png" alt="flipkart" />
        </a>
        <a href="https://www.amazon.in/" target="_blank">
          <img src="/images/amazon.png" alt="amazon" />
        </a>
      </div>
      <div className="shoe-image">
        <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok" target="_blank">
          <img src="/images/shoe_image.png" alt="Shoe image" />
        </a>
      </div>
    </div>
  );
}

export default MainSection;
