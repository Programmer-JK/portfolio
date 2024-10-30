import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div id="logo">
          <a href="/portfolio">Park JongKwon</a>
        </div>
        <span class="check">test</span>
        <nav>
          <a href="#about">&lt; About /&gt;</a>
          <a href="#skills">&lt; Skills /&gt;</a>
          <a href="#projects">&lt; Projects /&gt;</a>
          <a href="#contact">&lt; Contact /&gt;</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
