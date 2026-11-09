import React from 'react';

function TeacherBox(props) {
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 flex flex-col items-center justify-center border-2 border-blue-700/10 rounded-xl hover:shadow-sm transition-all py-16 px-8 cursor-pointer group">
            <div className="size-24 rounded-full mb-5 border-4 ring-4 ring-biscay-700/10 border-blue-700/30 overflow-hidden group-hover:animate-ripple">
                <img src="/images/team-profile/hesam-mosavi.png" alt="" className="" />
            </div>
            <div className="text-center">
                <h4 className="text-blue-700 dark:text-blue-450 text-lg/3 font-YekanBakh-Bold">حسام موسوی</h4>
                <h6 className="text-gray-300 dark:text-gray-200 text-sm mt-1">بنیانگذار راکت</h6>
            </div>
        </div>

    );
}

export default TeacherBox;