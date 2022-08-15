import "./Home.css"
import { useEffect } from "react"
import {Card} from "../../components/card/card"
import axios from "axios"
// import { getPopulation } from "../../services/getPopulation"
const Home = () =>{
   
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }, [])
    return (
        <div className="app">
            <Card props ="first"/>
            <Card />
        </div>
    )
}

export default Home