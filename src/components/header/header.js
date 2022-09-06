import "./header.css"
import { useState } from "react";
import audio from "../../audio.png"
import noAudio from "../../no-audio.png"

const Header = (()=>{
    const [volume, setVolume] = useState(1);
    const [isAudioImg, setIsAudioImg] = useState(parseInt(localStorage.getItem("Volume")));
    const [audioImg, setAudioImg] = useState(parseInt(localStorage.getItem("Volume")) == 0 ? noAudio : audio);
    const handleVolume = (e =>{
        e.preventDefault()
        volume === 0 ? setVolume(1) : setVolume(0)
        parseInt(localStorage.setItem("Volume", volume))
        isAudioImg == 1 ? setIsAudioImg(0) : setIsAudioImg(1)
        isAudioImg == 1 ? setAudioImg(audio) : setAudioImg(noAudio)
    })
    return (
        <header>
            <h1>Guess who has more people</h1>
            <img className="volume-button" onClick={handleVolume} src={audioImg}></img>
        </header>
    )
})

export default Header