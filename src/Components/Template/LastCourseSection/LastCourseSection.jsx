import React from 'react';
import SectionTitle from "../../Title/sectionTitle.jsx";
import CoursesBox from "../../CoursesBox/CoursesBox.jsx";

function LastCourseSection({courses}) {
    return (
        <section className="container mt-28 xl:mt-50">
            <SectionTitle title="آخرین دوره ها" linkTitle="مشاهده همه دوره‌ها" LinkAddress="/products-page"/>
            {/*<!-- ! -------------------- Course Wrapper -------------------- ! -->*/}
            <div className="grid grid-cols-12 gap-x-6 gap-y-20">
                {courses.map(course => (
                    <CoursesBox key={course.id} {...course} gridClass={'sm:col-span-6 lg:col-span-4 xl:col-span-3'}/>
                ))}
            </div>
        </section>
    );
}

export default LastCourseSection;