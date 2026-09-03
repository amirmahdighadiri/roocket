import Home from "./Pages/Home/Home.jsx";
import Error from "./Pages/Error/Error.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Skills from "./Pages/Skills/Skills.jsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.jsx";
import Certifications from "./Pages/Certifications/Certifications.jsx";
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import Podcast from "./Pages/Podcast/Podcast.jsx";
import Verify from "./Pages/Auth/Verify.jsx";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout.jsx";
import Panel from "./Components/DashboardPages/Panel/Panel.jsx";
import Courses from "./Components/DashboardPages/Courses/Courses.jsx";
import Questions from "./Components/DashboardPages/Questions/Questions.jsx";
import Subscription from "./Components/DashboardPages/Subscription/Subscription.jsx";
import Followings from "./Components/DashboardPages/Followings/Followings.jsx";
import Comments from "./Components/DashboardPages/Comments/Comments.jsx";
import Certificates from "./Components/DashboardPages/Certificates/Certificates.jsx";

const routes = [
    {
        path: '/', element: <Layout/>, children: [
            {path: '/', element: <Home/>},
            {path: 'about-us', element: <AboutUs />},
            {path: 'skills' , element: <Skills />},
            {path: 'products-page', element: <ProductsPage/>},
            {path: 'product-page', element: <ProductPage/>},
            {path: 'certifications' , element: <Certifications/>},
            {path: 'podcasts' , element: <Podcast/>},
        ]
    },
    {path: '/dashboard' , element: <DashboardLayout/> ,children: [
            {path: 'panel' , element: <Panel/>},
            {path: 'courses' , element: <Courses/>},
            {path: 'questions' , element: <Questions/>},
            {path: 'subscription' , element: <Subscription/>},
            {path: 'followings' , element: <Followings/>},
            {path: 'comments' , element: <Comments/>},
            {path: 'certificates' , element: <Certificates/>},
        ]},
    {path: '/auth' , element: <Auth/> },
    {path: '/verify' , element: <Verify/> },
    {path: '/*', element: <Error/>}
]

export default routes