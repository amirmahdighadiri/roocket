import {configureStore} from "@reduxjs/toolkit";
import users from "./Store/Users.jsx";
import courses from "./Store/Courses.jsx";
import learningPath from "./Store/LearningPath.jsx";
import skills from "./Store/Skills.jsx";
import podcasts from "./Store/Podcasts.jsx";
import articles from "./Store/Articles.jsx";
import carts from "./Store/Carts.jsx";
import comments from "./Store/Comments.jsx";
import discount from "./Store/Discount.jsx";

const store = configureStore({
    reducer: {
        users,
        courses,
        learningPath,
        skills,
        podcasts,
        articles,
        carts,
        comments,
        discount
    }
})

export default store