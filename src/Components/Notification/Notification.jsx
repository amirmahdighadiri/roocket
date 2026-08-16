import React, {useEffect, useState, useContext} from 'react';
import ReactDOM from "react-dom";
import {AppContext} from "../../Context/AppContext.jsx";

function Notification({title, message, Icon, setIsOpen, isOpen}) {
    const [modalTopPosition, setModalTopPosition] = useState(0);
    const {isShowNotification, setIsShowNotification} = useContext(AppContext)

    useEffect(() => {

        setModalTopPosition(window.scrollY + 20)

        const changgePositionTimer = setTimeout(() => {
            setModalTopPosition(-50)
        }, 2500)


        return () => {
            clearTimeout(changgePositionTimer)
        }

    }, [])

    return ReactDOM.createPortal(
        <div
            className={`w-90 h-20 absolute top-4 ${isShowNotification ? 'right-4' : '-right-90'}  z-20 mx-auto flex items-center gap-x-3 p-3.5 pr-7 rounded-lg bg-gray-200 dark:bg-dark-930 shadow overflow-hidden duration-200 transition-all`}>
            {/* ! ================== ! Notification Icon ! ================== ! */}
            <div className="relative h-full flex-center">
                <div className="absolute -right-1/2 -z-10 w-8 h-full rounded-sm bg-gray-300 dark:bg-dark-890"></div>
                {Icon && <Icon/>}
            </div>
            {/* ! ================== ! Notification Content ! ================== ! */}
            <div className="text-zinc-900 dark:text-zinc-100">
                <p className="font-Dana-DemiBold text-lg">{title}</p>
                <p className="text-sm">{message}</p>
            </div>
            {/* ! ================== ! Progress Bar ! ================== ! */}
            <div  className={`absolute bottom-0 right-0 w-0 h-0.75 bg-blue-500 ${isShowNotification ? "animate-grow-width" : ""}`} onAnimationEnd={() => setIsShowNotification(false)}></div>
        </div>,
        document.getElementById("notification-wrapper"));
}

export default Notification;