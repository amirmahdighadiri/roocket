import { useEffect, useState } from "react";
import {supabase} from "../../Lib/supabaseClient.js";

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [isServerAvailable, setIsServerAvailable] = useState(false);
    const [isCheckingServer, setIsCheckingServer] = useState(true);

    useEffect(() => {
        if (!isOnline) {
            setIsServerAvailable(false);
            setIsCheckingServer(false);
            return;
        }

        let isActive = true;
        setIsCheckingServer(true);

        const checkServerAvailability = async () => {
            const { error } = await supabase
                .from("courses")
                .select("id")
                .limit(1);

            if (isActive) {
                setIsServerAvailable(!error);
                setIsCheckingServer(false);
            }
        };

        checkServerAvailability();

        return () => {
            isActive = false;
        };
    }, [isOnline]);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return {isOnline , isServerAvailable , isCheckingServer};
}

export default useOnlineStatus;
