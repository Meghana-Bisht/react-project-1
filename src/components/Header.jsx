import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <a href="https://www.nike.com/in/" target="_blank">
              <img src="/images/brand_logo.png" alt="Brand-Name" />
            </a>
          </div>
          <ul>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="https://www.google.com/maps/@29.2219548,79.5031108,14z?entry=ttu" target="_blank">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="file:///D:/HTML_and_CSS/Glassmorphosim_form/index.html" target="_blank">
                Contact
              </a>
            </li>
          </ul>
          <button className="red-btn">LOGIN</button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
