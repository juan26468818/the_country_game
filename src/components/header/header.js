import "./header.css"
import { useState } from "react";
import audio from "../../audio.png"
import noAudio from "../../no-audio.png"

const Header = (()=>{

    return (
        <header>
            <h1>Guess who has more people</h1>
            {/* <img className="volume-button" onClick={handleVolume} src={audioImg}></img> */}
        </header>
    )
})

export default Header