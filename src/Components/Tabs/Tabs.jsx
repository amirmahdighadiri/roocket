import React, {useState} from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import useToggle from "../../Hooks/useToggle/useToggle.jsx";

function Tabs({activeTab, tabs, changeTab}) {
    const [isOpenSubMenu, toggleIsOpenSubMenu] = useToggle();
    const changeTabHandler = (event, label, key) => {
        event.preventDefault()
        changeTab({label, key});
        toggleIsOpenSubMenu(false)
    }

    return (
        <>
            {/*<!-- ! -------------------- Courses Details Menu (Desktop) -------------------- ! -->*/}
            <div className="hidden md:flex lg:inline-flex justify-center items-center px-4 py-2 bg-white dark:bg-dark-body-100 rounded-xl">
                {
                    tabs.map(tab => (
                        <button onClick={(event) => changeTabHandler(event, tab.label, tab.key)} key={tab.id} type="button" className={`h-12 flex items-center gap-x-2 ${activeTab.key === tab.key ? 'bg-blue-700 dark:bg-dark-900 text-white' : 'text-chambray-400 hover:text-blue-450'} rounded-lg  text-sm lg:text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer`}>
                            {tab.icon && <DynamicIcon name={tab.icon} className="size-4 xl:size-5 text-inherit"/>}
                            <span className="">{tab.label}</span>
                            {tab.value && <span className={`flex-center size-7 ${activeTab.key === tab.key ? 'bg-white dark:bg-dark-body-100 text-blue-700 dark:text-white' : 'bg-dark-900 text-white'} rounded-lg text-sm`}>{tab.value}</span>}
                        </button>
                    ))
                }
            </div>
            {/*<!-- ! -------------------- Courses Details Menu (Mobile) -------------------- ! -->*/}
            <div className="w-full block md:hidden">
                <button onClick={toggleIsOpenSubMenu} type="button"
                        className="w-full h-14 flex items-center justify-between px-5 py-3 bg-white dark:bg-dark-body-100 rounded cursor-pointer">
                    <span className="flex items-center gap-x-2 text-blue-450">
                        <DynamicIcon name="chartBar" className="size-5 text-inherit"/>
                        <span className="">{activeTab.label}</span>
                    </span>
                    <span className="flex-center h-full pr-5 border-r border-blue-450 text-blue-450">
                        <DynamicIcon name="arrowDown" className="size-2 text-inherit"/>
                    </span>
                </button>
                {/*<!-- ! -------------------- Submenu -------------------- ! -->*/}
                <div
                    className={`${isOpenSubMenu ? 'block' : 'hidden'} w-full bg-white dark:bg-dark-body-100 rounded-lg px-2 py-2 mt-3 transition-all`}>
                    <ul className="">
                        {
                            tabs.map(tab => (
                                <li key={tab.id}>
                                    <button onClick={(event) => changeTabHandler(event, tab.label, tab.key)} key={tab.id} type="button" className={`w-full h-12 flex items-center gap-x-2 ${activeTab.key === tab.key ? 'bg-blue-700 dark:bg-dark-900 text-white' : 'text-chambray-400 hover:text-blue-450'} rounded-lg  text-sm lg:text-xl font-YekanBakh-Bold px-5 pt-1 transition-all cursor-pointer`}>
                                        {tab.icon && <DynamicIcon name={tab.icon} className="size-4 xl:size-5 text-inherit"/>}
                                        <span className="">{tab.label}</span>
                                        {tab.value && <span className={`flex-center size-7 ${activeTab.key === tab.key ? 'bg-white dark:bg-dark-body-100 text-blue-700 dark:text-white' : 'bg-dark-900 text-white'} rounded-lg text-sm`}>{tab.value}</span>}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>

    );
}

export default Tabs;