import AppProvider from "./Context/AppContext.jsx";
import {useRoutes} from "react-router-dom";
import routes from "./routes.jsx";

function App() {
    const router = useRoutes(routes);
    return (
        <AppProvider>
            {router}
        </AppProvider>
    )
}

export default App
