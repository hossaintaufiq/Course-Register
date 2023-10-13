import PropTypes from 'prop-types';

const Course = ({ course, HandleSelectButton }) => {

    const { cover_img, course_name, course_details, course_price, course_credit_hour } = course;

    // console.log(course.length);
    return (
        < >
                <div className='h-102  p-4 drop-shadow-xl rounded-xl bg-white flex flex-col justify-between' >
                    <img src={cover_img} alt="" className='w-full mb-4 h-36' />
                    <h2 className='text-lg font-semibold'>{course_name}</h2>
                    <h3 className='text-sm mt-3 mb-4'>{course_details}</h3>
                    <div className='flex'>
                        <img src="./dollar.png" alt="" className='w-5 h-5' />
                        <h2 className='text-sm'>Price:{course_price}</h2>
                        <img src="./Frame.png" alt="" className='w-5 h-5 ' />
                        <h2 className='text-sm'>Credit: {course_credit_hour}hr</h2>
                    </div>
                    <button className='w-full bg-[#2F80ED] py-2 rounded-md mt-5 text-white' onClick={()=>HandleSelectButton(course)}>Select</button>
                </div>
            </>

    );
};

Course.propType = {
    course: PropTypes.object.isRequired,
    HandleSelectButton: PropTypes.func
}

export default Course;