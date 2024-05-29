import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

const NewColorForm = ({addColor}) => {
    const navigate = useNavigate();
    const initialState = {
        name: "",
        color:"#ffffff"
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        const {name,value} = e.target
        setFormData(data => ({
            ...data,[name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const {color,name} = formData;
        navigate("/colors", {state: {color, name}})
        setFormData(initialState); 
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input
            id="color"
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            />

             <label htmlFor="name">Name</label>
            <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )

}

export default NewColorForm;