import ksrct from './assets/ksrct.png'
import ksrct2 from './assets/ksrct2.png'
import Course from './Course';

function CourseList(){
    const courses=[
        {
            id:1,
            name:"Surya P", 
            price:199, 
            image:ksrct2, 
            rating:5
        },
        {
            id:2,
            name:"Karthikeyan R", 
            price:199, 
            image:ksrct, 
            rating:2
        },
        {
            id:3,
            name:"Dileep s", 
            price:499, 
            image:ksrct, 
            rating:4
        },
        {
            id:4,
            name:"Siraj DGP", 
            price:"999", 
            image:ksrct2, 
            rating:5
        }
    ]

    courses.sort((x,y)=>(y.price-x.price))

    const vfscourses=courses.filter((course)=>course.price<200)

    const coursesList=vfscourses.map(
        (course,index) => <Course key={index} name={course.name} price={course.price} image={course.image} rating={course.rating} />
    )

    return(
        <>
            {coursesList}
        </>
    )

}

export default CourseList