import ksrlogo from './assets/ksrlogo.png'
import rk from './assets/rk.jpg'
import barcode from './assets/barcode.jpg'

function Id_card(){
    return(
        <div className="iddesign">
            <img src={ksrlogo} alt="" />
            <h2>K.S.RANGASAMY</h2>
            <h5>COLLEGE OF TECHNOLOGY</h5>
            <p>(Autonomous)</p>
            <h3>Tiruchengode - 637 215</h3>
            <img id="imgsize" src={rk} alt="" />
            <div className="nesteddiv">
                <h4>KARTHIKEYAN R</h4>
                <p>B.Tech(IT)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-2027</p>
            </div>
            <img id='barcodesize' src={barcode} alt="" />
            <h4>2023CTUIT050S</h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;principle</p>
            <hr id="lineclr"></hr>
            <p>www.ksrct.ac.in</p>
        </div>
    )
}

export default Id_card