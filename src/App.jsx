
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([])
  const [remaining, setRemaining] = useState([])
  const [hour, setHour] = useState([])
  const [price, setPrice] = useState([])

  


  const HandleSelectButton = course => {
    const isExist = selectedCourse.find((item) => item.id == course.id);
    let count = course.course_price;
    let hour = course.course_credit_hour;
   
    // pre-code
    // if (isExist) {
    //   alert('Already selected')
    // }
    // else {
    //   selectedCourse.forEach((item) => {
    //     count = count + item.course_price;
    //     hour = hour + item.course_credit_hour;
    //   })

    //   setSelectedCourse([...selectedCourse, course])

    // }

    // exprement 

    selectedCourse.forEach((item) => {
      count = count + item.course_price;
      hour = hour + item.course_credit_hour;
    })
      

    if (isExist) {
      alert('Already selected')
    }
    else {
      
      let remaining = 20 - hour;
      if (hour > 20) {
        alert('You do not have enough hour left')
  
      }
      else {
        setSelectedCourse([...selectedCourse, course])
        setPrice(count);
        setHour(hour);
        setRemaining(remaining);
      }
      }


    }

//  end 
    // const remaining = 20 - hour;
    // if (hour > 20) {
    //   alert('You do not have enough hour left')

    // }
    // else {
    //   setPrice(count);
    //   setHour(hour);
    //   setRemaining(remaining);


    // }




  

  return (
    <div className='mx-14 '>

      <Header />


      <div className='flex flex-col md:flex-row gap-4'>
        <Courses
          HandleSelectButton={HandleSelectButton}
        />
        <Bookmarks
          selectedCourse={selectedCourse}
          remaining={remaining}
          hour={hour}
          price={price}
        />

      </div>


    </div>
  )
}

export default App
