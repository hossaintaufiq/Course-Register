import { useEffect, useState } from "react";
import Course from "../course/Course";
import PropTypes from 'prop-types';


const Courses = ({HandleSelectButton}) => {
    const [courses,setCourses]= useState([])

    useEffect(()=>{
        fetch('./info.json')
        .then(res=>res.json())
        
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="md:w-2/3 w-full grid grid-cols-1 lg:grid-cols-3 gap-6"> 

        {
             courses.map(course=>
                <Course 
                key={course.id} 
                course={course}
                HandleSelectButton={HandleSelectButton}
                
                />
             )

        }
       
            

           
        </div>
    );
};

Courses.propType = {
    // course: PropTypes.object.isRequired
    HandleSelectButton: PropTypes.func
}

export default Courses;