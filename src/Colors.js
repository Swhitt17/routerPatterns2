import React, {useState, useEffect} from "react";
import { Link,useLocation } from "react-router-dom";


const Colors = () => {
    const colorData = useLocation();
    console.log(colorData, "data");

    const INITIAL_STATE = [
        {color: "#dab2eb", name: "lavender"},
        {color: "#acf2d4", name: "mint"}
    ]
   const [colors, setColors] = useState(INITIAL_STATE)

    useEffect (() => {
        setColors(colors => [...colors, {...colorData.state}])
    },[])

    
  console.log(colors, 'colors')

    return (
        <div>
            <h2>Color Factory</h2>
            <button><Link to="/colors/new">Add a New Color</Link></button>
            <div>
            {colors.map(c =>
                (
                 <div>
                <Link to={{pathname:`/colors/${c.name}`,state: {color:c.color, name:c.name}}}> {c.name} </Link> 
                 </div>
                )
            )}
             </div>
               
        </div>
    )


}


export default Colors;