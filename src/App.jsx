import AppProvider from "./Context/AppContext.jsx";
import {useRoutes} from "react-router-dom";
import routes from "./routes.jsx";
import ConfirmModal from "./Components/Modals/ConfirmModal/ConfirmModal.jsx";
import Notification from "./Components/Notification/Notification.jsx";

function App() {
    const router = useRoutes(routes);
    return (
        <AppProvider>
            {router}

            <Notification />
            <ConfirmModal />
        </AppProvider>
    )
}

export default App
