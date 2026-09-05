import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {AppContext} from "../../Context/AppContext.jsx";

function MenuOverlay() {
    const {setIsOpenMenu,isShowOverlay,setIsShowOverlay,toggleProfileMenu} = useContext(AppContext);

    const hiddenOverlayHandler = () => {
        setIsShowOverlay(false);
        setIsOpenMenu(false);
        toggleProfileMenu()
    }

    return ReactDOM.createPortal(
        <div className={`${isShowOverlay ? 'block' : 'hidden'} w-full h-full fixed inset-0 z-10 blur-sm bg-biscay-700/60`} onClick={hiddenOverlayHandler}></div>
        , document.getElementById("overlay-wrapper"))
}

export default MenuOverlay;