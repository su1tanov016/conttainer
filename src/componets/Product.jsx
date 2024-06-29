import { useState } from "react"
import "./Product.css"
const Product = (props) =>{
    const [color, setColor]= useState("white")
    const openColor =() =>{
        setColor("red")
      }
    const open2Color =() =>{
        setColor("gold")
      }
    return(
        <div className="container">
            <button onClick={openColor}>red</button>
            <button onClick={open2Color}>gold</button>
            <h1 className="cont" style={{backgroundColor: color}}></h1>
        </div>
    )
}
export default Product