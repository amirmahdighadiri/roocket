import React, {useEffect} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import TagBox from "../../Components/TagBox/TagBox.jsx";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
{/*<!-- ! -------------------- Images -------------------- ! -->*/}
import instagramPhone from "../../assets/images/instagram.png";
import banner1 from "../../assets/images/banner/banner-1.gif";

function Podcast(props) {

    const dispatch = useDispatch();
    const {courses, loading} = useSelector(state => state.courses);
    useEffect(() => {
        if (!courses.length) {
            dispatch(getCoursesFromServer("http://localhost:3000/courses"))
        }
    }, [])

    return (
        <section className="container">
            <div className="grid grid-cols-12 gap-6 mt-12">
                <aside className="col-span-3">
                    {/*<!-- ! -------------------- Aside Wrapper -------------------- ! -->*/}
                    <div className="pt-9 pb-9 px-5 dark:bg-dark-930 border border-primary-gray-185 dark:border-dark-930 mb-8 rounded-md">
                        {/*<!-- ! -------------------- Tags Wrapper -------------------- ! -->*/}
                        <div className="mb-10">
                            <div className="flex items-center gap-x-2 mb-3">
                                <DynamicIcon name="sharp" className="size-5 dark:text-gray-920 text-biscay-700"/>
                                <span className="inline-block mt-2 text-biscay-700 dark:text-white font-Mult-Font-Bold">تگ های محبوب</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    courses.map(course => (
                                        <TagBox key={course.id} tag={course.title}/>
                                    ))
                                }
                            </div>
                        </div>
                        {/*<!-- ! -------------------- Instagram Section -------------------- ! -->*/}
                        <div className="relative flex items-center justify-between p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-md">
                            <img src={instagramPhone} alt="instagram" className="absolute -top-7 -right-1 w-32 h-25"/>
                            <Link to="/" className="inline-block mr-auto p-2 font-YekanBakh-Bold text-purple-600 bg-white rounded text-xs border border-white hover:bg-transparent hover:text-white transition-all">
                                <span className="">مشاهده اینستاگرام</span>
                            </Link>
                        </div>
                        {/*<!-- ! -------------------- Banner Wrapper -------------------- ! -->*/}
                        <div className="w-full border border-primary-gray-185 rounded-lg overflow-hidden mt-4">
                            <Link to="/" className="">
                                <img src={banner1} alt="" className="w-full h-full object-cover"/>
                            </Link>
                        </div>
                    </div>
                </aside>
                <div className="col-span-9"></div>
            </div>
        </section>
    );
}

export default Podcast;