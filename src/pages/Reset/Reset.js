import "./Reset.css"
import { Link } from "wouter"
import Header from "../../components/header/header";


const Reset = (()=>{


    return(
        <div>
            <Header />
            <div className="reset-container"> 
                <h2>Lorem ipsum</h2>
                <Link to="/"><button className="button-b">Reset</button></Link>
            </div>
        </div>
    )
}) 




export {Reset};