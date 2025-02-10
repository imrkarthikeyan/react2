import ksrlogo from './assets/ksrlogo.png'
import barcode from './assets/barcode.jpg'
import empty from './assets/emptyprofile.png'

function Id_card(props){
    return(
        <div className="iddesign">
            <img src={ksrlogo} alt="" />
            <h2>K.S.RANGASAMY</h2>
            <h5>COLLEGE OF TECHNOLOGY</h5>
            <p>(Autonomous)</p>
            <h3>Tiruchengode - 637 215</h3>
            <img id="imgsize" src={props.image} alt="" />
            <div className="nesteddiv">
                <h4>{props.name}</h4>
                <p>{props.dept}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.year}</p>
            </div>
            <img id='barcodesize' src={barcode} alt="" />
            <h4>{props.id}</h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;principle</p>
            <hr id="lineclr"></hr>
            <p>www.ksrct.ac.in</p>
        </div>
    )
}

Id_card.defaultProps={
    name : "DEFAULT NAME",
    dept : "BE(CSE)",
    year : "2022-2026",
    id : "2023CTUIT040S",
    image : empty
}

export default Id_card