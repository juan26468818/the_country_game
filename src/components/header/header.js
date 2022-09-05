import "./header.css"
import { useState } from "react";

const Header = (()=>{
    const [volume, setVolume] = useState(1);
    const handleVolume = (e =>{
        e.preventDefault()
        volume === 0 ? setVolume(1) : setVolume(0)
        localStorage.setItem("Volume", volume)
    })
    return (
        <header>
            <h1>Guess who has more people</h1>
            <button type="button" className="volume-button" onClick={handleVolume}>Volume</button>
        </header>
    )
})

export default Header