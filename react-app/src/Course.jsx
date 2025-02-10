
const course1="HTML"

function Course(props){

    return(
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.rating}</p>
        </div>
    )
}

Course.defaultProps={
    name : "Name",
    price : 1000,
    rating : 1
}

export default Course