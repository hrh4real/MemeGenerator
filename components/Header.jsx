import React from "react";
import trollFace from "./images/troll-face.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
    function handleLogoClick() {
        navigate('/');
    }
    return (
        <header className="header">
            <img
                src={trollFace}
                alt="troll-face"
                className="troll-face"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }}
            />
            <h1 className="header-text">Meme Generator</h1>
        </header>
    )
}