import React from 'react';
import SectionTitle from "../../Title/sectionTitle.jsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards, Navigation, Pagination} from 'swiper/modules';
{/*<!-- ! -------------------- Styles -------------------- ! -->*/}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';
import PodcastBox from "../../PodcastBox/PodcastBox.jsx";
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";

function PodcastSection({podcasts}) {
    return (
        <section className="container">
            <SectionTitle title="راکت کست" linkTitle="مشاهده همه پادکست های صوتی" LinkAddress="/podcasts"/>
            {/*<!-- ! -------------------- Swiper Wrapper -------------------- ! -->*/}
            <div className="">
                <Swiper
                    className="!pb-10"
                    modules={[Navigation, Pagination]}
                    pagination={{clickable: true, el: '.custom-podcast-pagination'}}
                    navigation={{
                        nextEl: '.custom-podcast-next-btn',
                        prevEl: '.custom-podcast-prev-btn',
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        720: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    {
                        [...podcasts].reverse().slice(0, 5).map(podcast => (
                            <SwiperSlide key={podcast.episode_number}>
                                <PodcastBox {...podcast} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="flex items-center justify-center gap-x-5 mt-5">
                    <div className="custom-podcast-prev-btn">
                        <DynamicIcon name={'arrow'}
                                     className={'size-8 rotate-180 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'}/>
                    </div>
                    <div className="custom-podcast-pagination !w-auto inline-flex items-center gap-x-2"></div>
                    <div className="custom-podcast-next-btn">
                        <DynamicIcon name={'arrow'}
                                     className={'size-8 hover:scale-120 cursor-pointer transition-all text-dark-550 dark:text-white dark:hover:text-white'}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PodcastSection;