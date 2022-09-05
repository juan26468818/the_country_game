import "./Reset.css"
import { Link, useRoute } from "wouter"
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import sadCat from "../../Sad_Cat.webp"
import Home from "../Home/Home";


const Reset = (()=>{
    const [match, params] = useRoute("/Reset/:counter");
    return(
        <div className="container">
            <Header />
            <div className="reset-container"> 
                <img src={sadCat} className="sadCat" alt="A Sad Cat" />
                <h2>Game Over</h2>
                <p>Keep going! You got {params.counter} answers right</p>
                <Link to="/"><button className="button">Try Again!</button></Link>
                
            </div>
            <Footer />
        </div>
    )
}) 




export default Reset;