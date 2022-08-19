import { useState,useEffect } from "react";
import "./style.css"
import { AddCard } from "../Middleware/Card/card.action";
import { useDispatch, useSelector } from "react-redux"
import { initialState } from "../Middleware/Card/card.reducer";

 export default function Card(){
    const [totalCard, setTotalCard] = useState([]);
   const products=useSelector((state)=>state.card)
    const dispatch = useDispatch();


    console.log(products)


const addcards=()=>{
 dispatch(AddCard({type:"INCREMENT",payload:Math.random()}))  
}

    return ( 
        <div>       
      
        <button
        onClick={() => {addcards()}}
      >
        Add card
      </button>
     
        <div className="container">
        {products.total_Card.length>0 &&products.total_Card.map((list) => {
      return <div className="card">{list.payload}
      </div>;
    })}
  </div>
  </div>)
}
