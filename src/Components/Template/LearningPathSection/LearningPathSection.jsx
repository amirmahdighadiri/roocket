import React from 'react';
import SectionTitle from "../../Title/sectionTitle.jsx";
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation, Pagination} from 'swiper/modules';
import LearningPathsBox from "../../LearningPathBox/LearningPathBox.jsx";
{/*<!-- ! -------------------- Styles -------------------- ! -->*/}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';


function LearningPathSection({learningPath}) {
    return (
        <section className="container mt-13 md:mt-32">
            <SectionTitle title="مسیرهای یادگیری" linkTitle="مشاهده همه مسیر‌های یادگیری" LinkAddress="/skills"/>
            {/*<!-- ! -------------------- Swiper Wrapper -------------------- ! -->*/}
            <div className="-mt-10 md:-mt-5">
                <Swiper
                    className="!overflow-hidden"
                    modules={[Navigation, Pagination]}
                    pagination={{clickable: true, el: '.custom-pagination'}}
                    navigation={{
                        nextEl: '.custom-learnin-path-next-btn',
                        prevEl: '.custom-learnin-path-prev-btn',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        720: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {
                        learningPath.map(item => (
                            <SwiperSlide key={item.id}>
                                <LearningPathsBox {...item} />
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
                <div className="flex items-center justify-center gap-x-5 mt-10">
                    <div className="custom-learnin-path-prev-btn">
                        <DynamicIcon name={'arrow'}
                                     className={'size-8 rotate-180 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'}/>
                    </div>
                    <div className="custom-pagination !w-auto "></div>
                    <div className="custom-learnin-path-next-btn">
                        <DynamicIcon name={'arrow'}
                                     className={'size-8 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearningPathSection;