import { useState } from "react";


function Course(props){

    //let purchased=false;

    const [purchased, setPurchased] = useState(false);
    const [discount, setDiscount] = useState(props.price)

    function BuyCourse(amt){
        console.log(props.name, "purchased with", amt, "% discount");
        setPurchased(true);
        setDiscount(discount-amt);
        console.log(purchased);
    }

    return(
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{discount}</p>
            <button onClick={() => BuyCourse(20)} >Discount</button>
            <p>{purchased ? "Already purchased" : "Get it now"}</p>
            <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
    )
}


export default Course