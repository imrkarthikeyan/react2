
import Id_card from './Id_card';
import rk from './assets/rk.jpg'

function Id_cardList(){
    const idcards=[
        {
            kid:1,
            name:"KARTHIKEYAN R", 
            dept:"B.TECH(IT)", 
            year:"2023-2027", 
            id:"2023CTUIT050", 
            image:rk
        },
        {
            kid:2,
            name:"SIRAJ DSP", 
            dept:"B.TECH(CSE)", 
            year:"2023-2027", 
            id:"2023CTUIT049", 
            image:rk
        },
        {
            kid:3,
            name:"LEO DOS S", 
            dept:"BE(CSE)", 
            year:"2022-2026", 
            id:"2023CTUCS043",
        }
    ]

    const allidcards=idcards.map(
        (idcard) => <Id_card key={idcard.kid} name={idcard.name} dept={idcard.dept} year={idcard.year} id={idcard.id} image={idcard.image} />
    )

    return(
        <>
            {allidcards}
        </>
    )
}

export default Id_cardList