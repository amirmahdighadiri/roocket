import {configureStore} from "@reduxjs/toolkit";
import users from "./Store/Users.jsx";
import courses from "./Store/Courses.jsx";
import learningPath from "./Store/LearningPath.jsx";
import skills from "./Store/Skills.jsx";

const store = configureStore({
    reducer: {
        users,
        courses,
        learningPath,
        skills,
    }
})

export default store