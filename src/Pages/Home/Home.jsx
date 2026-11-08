import HeroSection from '../../Components/HeroSection/HeroSection.jsx'
import useTitle from "../../Hooks/useTitle/useTitle.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoursesFromServer} from "../../Redux/Store/Courses.jsx";
import LearningPath, {getLearningPathFromServer} from "../../Redux/Store/LearningPath.jsx";
import {getPodcastsFromServer} from "../../Redux/Store/Podcasts.jsx";
import {getArticlesFromServer} from "../../Redux/Store/Articles.jsx";
import LastCourseSection from "../../Components/Template/LastCourseSection/LastCourseSection.jsx";
{/*<!-- ! -------------------- Styles -------------------- ! -->*/}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';
{/*<!-- ! -------------------- Images -------------------- ! -->*/}
import LearningPathSection from "../../Components/Template/LearningPathSection/LearningPathSection.jsx";
import AboutSection from "../../Components/Template/AboutSection/AboutSection.jsx";
import ArticleSection from "../../Components/Template/ArticleSection/ArticleSection.jsx";
import InstagramSection from "../../Components/Template/InstagramSection/InstagramSection.jsx";
import PodcastSection from "../../Components/Template/PodcastSection/PodcastSection.jsx";
import DescriptionSection from "../../Components/Template/DescriptionSection/DescriptionSection.jsx";



function Home(props) {
    useTitle('آمورش برنامه نویسی صفر تا صد - ژاکت')

    const dispatch = useDispatch();
    const {courses , coursesLoading} = useSelector(state => state.courses);
    const {learningPath , learningPathLoading, learningPathError, learningPathHasFetched} = useSelector(state => state.learningPath);
    const {podcasts, podcastsLoading, podcastsError, podcastsHasFetched} = useSelector(state => state.podcasts);
    const {articles, articleLoading, articleError, articleHasFetched} = useSelector(state => state.articles);

    useEffect(() => {
        if (!learningPathHasFetched && !learningPathLoading) {
            dispatch(getLearningPathFromServer());
        }
    },[learningPathLoading, learningPathHasFetched])

    useEffect(() => {
        if (!articleLoading && !articleHasFetched) {
            dispatch(getArticlesFromServer());
        }
    },[articleHasFetched , articleLoading])

    useEffect(() => {
        if (!podcastsLoading && !podcastsHasFetched) {
            dispatch(getPodcastsFromServer());
        }
    },[podcastsLoading , podcastsHasFetched])

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
            {/*<!-- ! -------------------- PodcastPage Section -------------------- ! -->*/}
            <PodcastSection podcasts={podcasts} />
            {/*<!-- ! -------------------- Description Section -------------------- ! -->*/}
            <DescriptionSection />
        </main>
    );
}

export default Home;