import "./Home.css"
import { useEffect, useState } from "react"
import {Card} from "../../components/card/card"
import axios from "axios"
import { type } from "@testing-library/user-event/dist/type"
// import { getPopulation } from "../../services/getPopulation"
const Home = () =>{
    const [countries, setcountries] = useState();
    const [reset, setReset] = useState(true);
   
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(response => setcountries(response))
            .catch(err => console.error(err));

    }, [])
    const handleClick = ((e)=>{
        e.preventDefault()
        setReset(reset ? false : true)
    })
    const isCountries = () =>{
        const randomNum =  Math.floor(Math.random()*250)
        const firstNum = Math.floor(Math.random()*250)
        const secondNum = Math.floor(Math.random()*250)

        if(countries !== undefined && firstNum !== secondNum){
            return (
                <div className="card-container">
                    <p>{countries[firstNum].name.common}</p>
                    <img src={countries[firstNum].flags.svg} className="flag"/>
                    <button type="submit" className="button" onClick={handleClick}>Has more people</button>
                </div>
            )
        }else if(firstNum === secondNum){
            isCountries()
        }
    }
    return (
        <div className="app">
            <div className={`card first`}>
                {isCountries()}
            </div>
            <div className="card">
                {isCountries()}
            </div>
            
        </div>
    )
}

export default Home