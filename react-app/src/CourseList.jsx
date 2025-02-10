import ksrct from './assets/ksrct.png'
import ksrct2 from './assets/ksrct2.png'
import Course from './Course';

function CourseList(){
    const courses=[
        {
            name:"Surya P", 
            price:"1100", 
            image:ksrct2, 
            rating:5
        },
        {
            name:"Karthikeyan R", 
            price:"1200", 
            image:ksrct, 
            rating:2
        },
        {
            name:"Dileep s", 
            price:"1500", 
            image:ksrct, 
            rating:4
        },
        {
            name:"Siraj DGP", 
            price:"2500", 
            image:ksrct2, 
            rating:5
        }
    ]

    const coursesList=courses.map(
        (course) => <Course name={course.name} price={course.price} image={course.image} rating={course.rating} />
    )

    return(
        <>
            {coursesList}
        </>
    )

}

export default CourseList