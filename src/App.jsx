import AppProvider from "./Context/AppContext.jsx";
import {useRoutes} from "react-router-dom";
import routes from "./routes.jsx";
import ConfirmModal from "./Components/Modals/ConfirmModal/ConfirmModal.jsx";
import Notification from "./Components/Notification/Notification.jsx";
import useOnlineStatus from "./Hooks/useOnlineStatus/useOnlineStatus.jsx";
import OfflinePage from "./Pages/OfflinePage/OfflinePage.jsx";

function App() {
    const {isOnline , isServerAvailable} = useOnlineStatus()
    const router = useRoutes(routes);
    return (
        <AppProvider>

            {isOnline || isServerAvailable ?
                <>
                    {router}
                    <Notification />
                    <ConfirmModal />
                </> :
                <OfflinePage isOnline={isOnline} />
            }

        </AppProvider>
    )
}

export default App
