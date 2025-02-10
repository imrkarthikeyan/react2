import './App.css'
import Course from './Course';
import CourseList from './CourseList';
import Id_card from './Id_card';
import rk from './assets/rk.jpg'

function App() {

  return (
    <>
      <Id_card name="KARTHIKEYAN R" dept="B.TECH(IT)" year="2023-2027" id="2023CTUIT050" image={rk} />
      <Id_card name="VIGNESH" dept="BE(CSE)" year="2023-2027" id="2023CTUCS036" />
      <CourseList/>
    </>
  )
}

export default App
