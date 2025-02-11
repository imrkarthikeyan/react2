import { useState } from "react";


function Course(props){

    //let purchased=false;

    const [purchased, setPurchased] = useState(false);

    function BuyCourse(discount){
        console.log(props.name, "purchased with", discount, "% discount");
        setPurchased(true);
        console.log(purchased);
    }

    return(
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={() => BuyCourse(20)} >Buy Now</button>
            <p>{purchased ? "Already purchased" : "Get it now"}</p>
        </div>
    )
}


export default Course