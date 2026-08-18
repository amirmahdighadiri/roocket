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
    {path: '/auth' , element: <Auth/> },
    {path: '/verify' , element: <Verify/> },
    {path: '/*', element: <Error/>}
]

export default routes