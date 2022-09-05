import "./Reset.css"
import { Link } from "wouter"
import Header from "../../components/header/header";
import Home from "../Home/Home";

const Reset = ((props)=>{

    console.log()
    return(
        <div>
            <Header />
            <div className="reset-container"> 
                <h2>Lorem ipsum</h2>
                <Link to="/"><button className="button">Reset</button></Link>
                
            </div>
        </div>
    )
}) 




export {Reset};