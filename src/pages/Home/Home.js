import "./Home.css"
import { useEffect, useState } from "react"
import {Card} from "../../components/card/card"
import { type } from "@testing-library/user-event/dist/type"
const Home = () =>{
    const [countries, setCountries] = useState();
    const firstNum = Math.floor(Math.random()*250)
    const secondNum = Math.floor(Math.random()*250)
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
        if(e.target === document.getElementById(firstNum)&& countries[firstNum].population > countries[secondNum].population){
            // setVisible("result_v")
            setTimeout(() => {
                setCounter(counter+1)
                setVisible("result")
            }, 1000);
        }else if(e.target === document.getElementById(secondNum) && countries[secondNum].population > countries[firstNum].population){
            // setVisible("result_v")
            setTimeout(() => {
                setCounter(counter+1)
                setVisible("result")
            }, 1000);
        }else if(e.target === document.getElementById(firstNum)&& countries[firstNum].population < countries[secondNum].population){

        }
    })
    const isCountries = (card) =>{
        if(countries !== undefined && firstNum !== secondNum){
            return (
                <div className="card-container">
                    <p>{countries[card].name.common}</p>
                    <img src={countries[card].flags.svg} className="flag"/>
                    <button type="button"className="button" onClick={handleClick} id={card}>Has more people</button>
                </div>
            )
        }else if(firstNum === secondNum){
            
            isCountries()
        }
    }
    return (
        <div className="app">
            <h1>Guess who has more people</h1>
            <div className="main-container">

                <div className="card first">
                    {isCountries(firstNum)}
                    {/* <p className={visible}>{countries[firstNum].population}</p> */}
                </div>
                <div className="card">
                    {isCountries(secondNum)}
                    {/* <p className={visible}>{countries[secondNum].population}</p> */}
                </div>
                <div className="counter">
                    {counter}
                </div>
                
            </div>
        </div>
    )
}

export default Home