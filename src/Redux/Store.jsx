import {configureStore} from "@reduxjs/toolkit";
import courses from "./Store/Courses.jsx";
import learningPath from "./Store/LearningPath.jsx";
import skills from "./Store/Skills.jsx";
import podcasts from "./Store/Podcasts.jsx";
import articles from "./Store/Articles.jsx";
import carts from "./Store/Carts.jsx";
import comments from "./Store/Comments.jsx";
import discount from "./Store/Discount.jsx";
import teacher from "./Store/Teacher.jsx";
import enrollments from "./Store/Enrollments.jsx";
import courseProgress from "./Store/CourseProgress.jsx";
import paymentTransactions from "./Store/PaymentTransactions.jsx";
import articleComments from "./Store/ArticleComments.jsx";
import podcastComments from "./Store/PodcastComments.jsx";
import followedTeachers from "./Store/FollowedTeachers.jsx";
import followedEpisodes from "./Store/FollowedEpisodes.jsx";

const store = configureStore({
    reducer: {
        courses,
        learningPath,
        skills,
        podcasts,
        articles,
        carts,
        comments,
        discount,
        teacher,
        enrollments,
        courseProgress,
        paymentTransactions,
        articleComments,
        podcastComments,
        followedTeachers,
        followedEpisodes,
    }
})

export default store
