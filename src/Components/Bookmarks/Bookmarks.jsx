
import PropTypes from 'prop-types';
const Bookmarks = ({selectedCourse,remaining,hour,price}) => {
    // console.log(selectedCourse)
    return (
        <div className="md:w-1/3 w-full">

            <div className='p-6 drop-shadow-xl bg-white rounded-lg'>

            <h2 className='border-b-2 text-[#2F80ED] border-[#2F80ED] font-bold text-lg pb-4'>Credit Hour Remaining {remaining} hr</h2>
            
            <h2 className='text-xl font-bold text-black mt-4 mb-5'>Course Name</h2>
            {
            selectedCourse.map((course)=>(
                    <li key={course.id } className=" list-decimal text-base font-normal"> {course.course_name}</li>  
            ))}

            
            <h2 className='border-t-2 border-b-2 font-medium text-base my-4 py-4'>Total Credit Hour :{hour}</h2>
            <h2 className='font-semibold text-base'>Total Price : {price} USD</h2>

            </div>
            
            


            
        </div>
    );
};

Bookmarks.propType = {
    selectedCourse: PropTypes.object
    // HandleSelectButton: PropTypes.func
}

export default Bookmarks;