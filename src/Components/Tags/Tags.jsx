import React ,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import TagBox from "./TagBox/TagBox.jsx";

function Tags(props) {
    const dispatch = useDispatch();
    const {courses, coursesLoading} = useSelector(state => state.courses);

    useEffect(() => {
        if (!courses.length) {
            dispatch(getCoursesFromServer("http://localhost:3000/courses"))
        }
    }, [])

    return (
        <>
            {
                courses.map(course => (
                    <TagBox key={course.id} tag={course.title}/>
                ))
            }
        </>
    );
}

export default Tags;