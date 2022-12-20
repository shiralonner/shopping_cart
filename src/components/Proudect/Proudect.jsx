import { useState } from "react";
import './Proudect.css';
import{useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export default function Proudect(props) {
    const selector = useSelector(state=>state)
    const dispatch = useDispatch()

    const [amount,setAmount]=useState(1)
    const [product,setProduct]=useState({...props.p,amount})

    const addCart = () => {
       for (let i = 0; i < selector.length; i++) {
        if(selector[i].id==product.id)  
        {
            dispatch({ type: "DELETE", payload:product})
            setProduct({...product, amount:{...amount}})
        }  
       }     
       dispatch({ type: "ADD", payload:product})
  }


  function handleChange(num){
    setProduct({ ...product, amount: parseInt(amount)+parseInt(num)  })
    setAmount(num)
  }


 return<div className="proudect">
    
  <div>
    {product.title}<br/>
    <img src={product.image}></img>
      <div className="description">
        <p>Price: {product.price}$</p>
        <div >{product.description}
        <br></br>
        {product.category}  
    </div>
    <br></br>
  </div>
   
 <input type="number" id="quantity" name="quantity" min="1" max="100" defaultValue="1" onChange={(e)=>handleChange(e.target.value)}/>
  <button type="button" class="btn btn-dark" onClick={addCart}>Add to Cart</button></div> 
 </div>
 

}
