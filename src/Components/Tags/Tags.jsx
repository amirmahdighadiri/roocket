import React ,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import TagBox from "./TagBox/TagBox.jsx";
import TagSkeleton from "../Loader/BoxSkeleton/TagSkeleton.jsx";

function Tags(props) {
    const dispatch = useDispatch();
    const {courses,courseLoading, courseHasFetched} = useSelector(state => state.courses);

    if (courseLoading) {
        return <TagSkeleton />;
    }

    return (
        <>
            {courses.map(course => (
                <TagBox key={course.id} tag={course.title} />
            ))}
        </>
    );
}

export default Tags;