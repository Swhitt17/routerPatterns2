import React, {useEffect} from "react";
import { useLocation, Link } from "react-router-dom";
import "./ColorFill.css"

const ColorFill = () => {
    const {state} = useLocation();
    
 console.log(state)
   console.log(state.color,'color')
    console.log(state.name,'name')
    useEffect(() => {
        document.body.style.backgroundColor = state.color
    },[])

    return(
        <div className="ColorFill">
            <h1 className="ColorFill-text">This is {state.name}</h1>
            <Link className={"ColorFill-link"}to="/colors">Go Home</Link>
        </div>
    )
    

}

export default ColorFill;