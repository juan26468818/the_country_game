import "./Home.css"
import { useEffect, useState } from "react"
import { useLocation } from "wouter";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ReactHowler from "react-howler";
import correctSound from "../../correct_answer.wav"
import incorrectSound from "../../incorrect_answer.wav"
const Home = (() =>{
    const [countries, setCountries] = useState();
    const [firstNum, setFirstNum] = useState(Math.floor(Math.random()*250));
    const [secondNum, setSecondNum] = useState(Math.floor(Math.random()*250));
    const [backColor, setBackColor] = useState("");
    const [visible, setVisible] = useState("result");
    const [counter, setCounter] = useState(0);
    const [record, setRecord] = useState(!localStorage.getItem("record") ? 0 : localStorage.getItem("record"));
    const [disable, setDisable] = useState(false);
    const [location, setLocation] = useLocation();
    const [playCorrect, setPlayCorrect] = useState(false);
    const [playIncorrect, setPlayIncorrect] = useState(false);
    //Llamada a API de paises.
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(response => setCountries(response))
            .catch(err => console.error(err));

    }, [])

    //Manejador de evento.
    const handleClick = ((e)=>{
        e.preventDefault()
        if(e.target === document.getElementById(firstNum)&& countries[firstNum].population > countries[secondNum].population){
            setDisable(true);
            setPlayCorrect(true)
            setVisible("result_v")
            setBackColor("winner")
            setCounter(counter+1)
            if(record <= counter) setRecord(counter+1)
            setTimeout(() => {
                setDisable(false)
                setPlayCorrect(false)
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250))
            }, 1648);
        }else if(e.target === document.getElementById(secondNum) && countries[secondNum].population > countries[firstNum].population){
            setDisable(true)
            setPlayCorrect(true)
            setVisible("result_v")
            setBackColor("winner")
            setCounter(counter+1)
            if(record <= counter) setRecord(counter+1)
            setTimeout(() => {
                setDisable(false)
                setPlayCorrect(false)
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250))
            }, 1648);
        }else if(e.target === document.getElementById(firstNum)&& countries[firstNum].population < countries[secondNum].population){
            setDisable(true)
            setPlayIncorrect(true)
            setVisible("result_v")
            setBackColor("loser")
            setTimeout(() => {
                setDisable(false)
                setPlayCorrect(false)
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250))
                localStorage.setItem('record', record)
                setLocation(`/Reset/${counter}`)
            }, 1648);

        }else if(e.target === document.getElementById(secondNum)&& countries[secondNum].population < countries[firstNum].population){
            setDisable(true)
            setPlayIncorrect(true)
            setVisible("result_v")
            setBackColor("loser")
            setTimeout(() => {
                setDisable(false)
                setPlayCorrect(false)
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250));
                localStorage.setItem('record', record)
                setLocation(`/Reset/${counter}`)
            }, 1648);

        }
    })


    //formateador de números.
    const formatNumber = ((num) =>{
        let str = num.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return str.join(".");
    })

    //tarjeta de país.
    const isCountries = (card) =>{
        if(countries !== undefined && firstNum !== secondNum){
            return (
                <div className="card-container">
                    <ReactHowler src={correctSound} playing={playCorrect} loop={true} volume={parseInt(localStorage.getItem("Volume"))} />
                    <ReactHowler src={incorrectSound} playing={playIncorrect} loop={true} volume={parseInt(localStorage.getItem("Volume"))} />
                    <p>{countries[card].name.common}</p>
                    <img src={countries[card].flags.svg} className="flag"/>
                    <button type="button" className="button" onClick={handleClick} id={card} disabled={disable}>Has more people</button>
                    <p className={visible}>{`It has ${formatNumber(countries[card].population)} people`}</p>
                </div>
            )
        }else if(firstNum === secondNum){
            
            isCountries()
        }
    }

    //Renderizado
    return(
        <div className="app">
            <Header />
            
            <div className={`${backColor} main-container`}>

                <div className={`card`}>
                    {isCountries(firstNum)}
                    
                </div>
                <div>
                    <p className="counter">Hits: {counter}</p>
                    <p className="vs">VS</p>
                    <p className="counter">Best Score: {record}</p>
                </div>
                <div className={`card`}>
                    {isCountries(secondNum)}
                
                </div>
                
                
            </div>
            <Footer />
        </div>
    )
    
})

export default Home