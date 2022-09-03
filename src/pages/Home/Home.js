import "./Home.css"
import { useEffect, useState } from "react"
import { type } from "@testing-library/user-event/dist/type"
const Home = () =>{
    const [countries, setCountries] = useState();
    const [firstNum, setFirstNum] = useState(Math.floor(Math.random()*250));
    const [secondNum, setSecondNum] = useState(Math.floor(Math.random()*250));
    const [backColor, setBackColor] = useState("");
    const [visible, setVisible] = useState("result");
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(response => setCountries(response))
            .catch(err => console.error(err));

    }, [])
    const handleClick = ((e)=>{
        e.preventDefault()
        formatNumber(2)
        // this.disabled = false
        if(e.target === document.getElementById(firstNum)&& countries[firstNum].population > countries[secondNum].population){
            setVisible("result_v")
            setBackColor("winner")
            setCounter(counter+1)
            setTimeout(() => {
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250))
            }, 2000);
        }else if(e.target === document.getElementById(secondNum) && countries[secondNum].population > countries[firstNum].population){
            setVisible("result_v")
            setBackColor("winner")
            setCounter(counter+1)
            setTimeout(() => {
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250))
            }, 2000);
        }else if(e.target === document.getElementById(firstNum)&& countries[firstNum].population < countries[secondNum].population){
            setVisible("result_v")
            setBackColor("looser")
            setCounter(0)
            setTimeout(() => {
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250))
            }, 2000);

        }else if(e.target === document.getElementById(secondNum)&& countries[secondNum].population < countries[firstNum].population){
            setVisible("result_v")
            setBackColor("looser")
            setCounter(0)
            setTimeout(() => {
                setBackColor("")
                setVisible("result")
                setFirstNum(Math.floor(Math.random()*250))
                setSecondNum(Math.floor(Math.random()*250))
            }, 2000);

        }
    })
    const formatNumber = ((numb) =>{
        let str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return str.join(".");
    })
    const isCountries = (card) =>{
        if(countries !== undefined && firstNum !== secondNum){
            return (
                <div className="card-container">
                    <p>{countries[card].name.common}</p>
                    <img src={countries[card].flags.svg} className="flag"/>
                    <button type="button"className="button" onClick={handleClick} id={card}>Has more people</button>
                    <p className={visible}>{`It has ${formatNumber(countries[card].population)} people`}</p>
                </div>
            )
        }else if(firstNum === secondNum){
            
            isCountries()
        }
    }
    return (
        <div className="app">
            <h1>Guess who has more people</h1>
            <div className={`${backColor} main-container`}>

                <div className={`card`}>
                    {isCountries(firstNum)}
                    
                </div>
                <div>
                    <p className="counter">Hits: {counter}</p>
                    <p className="vs">VS</p>
                </div>
                <div className={`card`}>
                    {isCountries(secondNum)}
                
                </div>
                
                
            </div>
        </div>
    )
}

export default Home