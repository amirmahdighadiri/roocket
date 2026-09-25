import HeroSection from '../../Components/HeroSection/HeroSection.jsx'
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import useTitle from "../../Hooks/useTitle/useTitle.jsx";
import SectionTitle from "../../Components/Title/sectionTitle.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation, Pagination} from 'swiper/modules';
import CoursesBox from "../../Components/CoursesBox/CoursesBox.jsx";
import LearningPathsBox from "../../Components/LearningPathBox/LearningPathBox.jsx";
import LearningPath, {getLearningPathFromServer} from "../../Redux/Store/LearningPath.jsx";
import ArticleBox from "../../Components/ArticleBox/ArticleBox.jsx";
import useToggle from "../../Hooks/useToggle/useToggle.jsx";
import PodcastBox from "../../Components/PodcastBox/PodcastBox.jsx";
import {getPodcastsFromServer} from "../../Redux/Store/Podcasts.jsx";
import {getArticlesFromServer} from "../../Redux/Store/Articles.jsx";
import LastCourseSection from "../../Components/Template/LastCourseSection/LastCourseSection.jsx";
{/*<!-- ! -------------------- Styles -------------------- ! -->*/}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';
{/*<!-- ! -------------------- Images -------------------- ! -->*/}
import instagramPhone from "../../assets/images/instagram.png"
import vahidProfile from "../../assets/images/profile/vahid.jpg"
import mahdiProfile from "../../assets/images/profile/mahdi.jpg"
import LearningPathSection from "../../Components/Template/LearningPathSection/LearningPathSection.jsx";
import AboutSection from "../../Components/Template/AboutSection/AboutSection.jsx";
import ArticleSection from "../../Components/Template/ArticleSection/ArticleSection.jsx";
import InstagramSection from "../../Components/Template/InstagramSection/InstagramSection.jsx";
import PodcastSection from "../../Components/Template/PodcastSection/PodcastSection.jsx";
import DescriptionSection from "../../Components/Template/DescriptionSection/DescriptionSection.jsx";



function Home(props) {
    useTitle('آمورش برنامه نویسی صفر تا صد - ژاکت')

    const dispatch = useDispatch();
    const {courses , loading} = useSelector(state => state.courses);
    const learningPath = useSelector(state => state.learningPath);
    const {podcasts , podcastLoading} = useSelector(state => state.podcasts);
    const {articles,articlesLoading} = useSelector(state => state.articles);


    useEffect(() => {
        dispatch(getCoursesFromServer("http://localhost:3000/courses"))
        dispatch(getLearningPathFromServer("http://localhost:3000/learningPath"))
        dispatch(getPodcastsFromServer("http://localhost:3000/episodes"))
        dispatch(getArticlesFromServer("http://localhost:3000/articles"))
    },[])

    return (
        <main className="">
            <HeroSection />
            {/*<!-- ! -------------------- Last Course Section -------------------- ! -->*/}
            <LastCourseSection courses={courses} />
            {/*<!-- ! -------------------- Learning Path Section -------------------- ! -->*/}
            <LearningPathSection learningPath={learningPath} />
            {/*<!-- ! -------------------- About Rocket Section -------------------- ! -->*/}
            <AboutSection/>
            {/*<!-- ! -------------------- Article Section -------------------- ! -->*/}
            <ArticleSection articles={articles} />
            {/*<!-- ! -------------------- Instagram Section -------------------- ! -->*/}
            <InstagramSection/>
            {/*<!-- ! -------------------- Podcast Section -------------------- ! -->*/}
            <PodcastSection podcasts={podcasts} />
            {/*<!-- ! -------------------- Description Section -------------------- ! -->*/}
            <DescriptionSection />
        </main>
    );
}

export default Home;