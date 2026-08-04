import React, {memo} from 'react';

function CustomRadioBox({radioName , name , value ,selected , changePlan }) {

    const changeHandler = event => changePlan(event.target.value)
    return (
        <label className="flex items-center gap-x-3 cursor-pointer">
            <div className="relative size-6">
                <input type="radio" name={radioName} value={value} checked={selected === value} onChange={changeHandler} className="appearance-none size-full bg-gray-100 dark:bg-gray-200 rounded-full cursor-pointer checked:bg-gray-800 dark:checked:bg-gray-400 peer"/>
                <span className="block !size-2 absolute inset-0 z-10 m-auto bg-white opacity-0 peer-checked:opacity-100 transition-all rounded-full"></span>
            </div>
            <span className="text-gray-800 dark:text-gray-920 font-YekanBakh-Bold text-lg">{name}</span>
        </label>
    );
}

export default memo(CustomRadioBox);