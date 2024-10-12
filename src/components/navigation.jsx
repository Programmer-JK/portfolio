import React from "react";

function Navigation() {
    return (
        <header>
            <div className="header-inner">
                <div className="container">
                    <div id="logo">
                        <a href="/portfolio">Park JongKwon</a>
                    </div>
                    <nav>
                        <a href="#about">&lt; About /&gt;</a>
                        <a href="#skills">&lt; Skills /&gt;</a>
                        <a href="#projects">&lt; Projects /&gt;</a>
                        <a href="#contact">&lt; Contact /&gt;</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navigation;