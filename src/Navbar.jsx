import React from "react";
import TrollImg from "./assets/Troll Face.png"

export default function Navbar(){
    return(<div className="navbar">
        <section>
            <img src={TrollImg} className="navbar-img"/>
            <span className="navbar-title">Meme Generator</span>
        </section>
        <section>
            <span className="navbar-description">React Course - Project 3</span>
        </section>
    </div>)
}