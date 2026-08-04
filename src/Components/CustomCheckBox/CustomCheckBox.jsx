import React from 'react';
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";

function CustomCheckBox({checkName , name}) {
    return (
        <label className="flex items-center gap-x-3 cursor-pointer">
            <div className="relative size-6 ">
                <input type="checkbox" name={checkName} className="appearance-none size-full bg-gray-100 dark:bg-gray-200 rounded-md  cursor-pointer checked:bg-gray-800 dark:checked:bg-gray-400 peer"/>
                <DynamicIcon name="check" className="!size-3.5 absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-all"/>
            </div>
            <span className="text-gray-800 dark:text-gray-920 font-YekanBakh-Bold text-lg">{name}</span>
        </label>
    );
}

export default CustomCheckBox;