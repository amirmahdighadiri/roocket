import React from 'react';
import DynamicIcon from "../../../DynamicIcon/DynamicIcon.jsx";
import useToggle from "../../../Hooks/useToggle/useToggle.jsx";

function DescriptionSection() {
    const [isShowBox , toggleShowBox] = useToggle(false)
    return (
        <section className="container mt-24 mb-20">
            <div className={`relative bg-white dark:bg-transparent border border-gray-5 dark:border-gray-5/20 px-11 py-11 rounded-lg`}>
                {/*<!-- ! -------------------- Vector -------------------- ! -->*/}
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         className="w-7 h-8 text-customOrange-700 mr-2 mb-4" viewBox="0 0 33 42">
                        <path fill="currentColor" fillOpacity="0.2" d="M33 0H6v9c0 14.912 12.088 27 27 27z"></path>
                        <path fill="currentColor" d="M27 6H0v9c0 14.912 12.088 27 27 27z"></path>
                    </svg>
                </div>
                {/*<!-- ! -------------------- Title -------------------- ! -->*/}
                <div className="mb-10">
                    <h1 className="text-lg sm:text-2xl lg:text-3xl pr-3 font-YekanBakh-Heavy text-biscay-700 dark:text-white">آموزش
                        برنامه نویسی با راکت</h1>
                </div>
                {/*<!-- ! -------------------- Description Content -------------------- ! -->*/}
                <div className={`${isShowBox ? 'h-auto overflow-visible' : 'h-122 overflow-hidden'}  text-gray-360 dark:text-white space-y-7 font-Mult-Font-Medium text-justify text-xl/10`}>
                    <p>برنامه نویسی یکی از حوزه‌های داغ در دنیای کنونی است و افراد بسیار زیادی تصمیم دارند تا فرایند
                        آموزش برنامه نویسی را آغاز کنند. دلایل بسیار زیادی برای این موضوع وجود دارد که در ادامه به آن‌ها
                        خواهیم پرداخت. اما این نکته را در ذهن داشته باشید که یادگیری و آموزش برنامه نویسی می‌تواند آینده
                        شما را تضمین کرده و مسیر کاری مشخصی را برای شما ایجاد کند.</p>
                    <p>در این مطلب از وبسایت راکت قصد داریم در ارتباط با ضرورت آموزش برنامه نویسی صحبت کنیم، تاریخچه‌ای
                        کلی از آن را مورد ارزیابی قراردهیم، مسیری برای آموزش برنامه نویسی از صفر را به شما معرفی کنیم و
                        همچنین از آموزش‌های رایگان و آموزش‌های مربوط به وب بگوییم. </p>
                    <h2 className="font-YekanBakh-Heavy text-lg sm:text-2xl lg:text-3xl">مزایا یادگیری و آموزش برنامه
                        نویسی</h2>
                    <p>دلایل زیادی برای یادگیری و آموزش برنامه نویسی وجود دارد. در اینجا چند مورد از مهم ترین آن‌ها
                        آورده شده است:</p>
                    <p>آینده شغلی: برنامه نویسی یکی از پرتقاضاترین مهارت ها در بازار کار امروز است. طبق گزارشی از مجمع
                        جهانی اقتصاد، مهارت های نرم افزاری و فناوری اطلاعات در صدر لیست مهارت هایی قرار دارند که بیشترین
                        تقاضا را در آینده دارند. یادگیری برنامه نویسی می تواند به شما کمک کند تا در دنیای کار رقابتی
                        پیشی بگیرید و شغلی با درآمد بالا و رضایت بخش پیدا کنید.</p>
                    <p>خلاقیت: برنامه نویسی یک فعالیت خلاقانه است. شما می توانید از آن برای ایجاد محصولات و خدمات جدید و
                        نوآورانه استفاده کنید. یادگیری برنامه نویسی می تواند به شما کمک کند تا خلاقیت خود را بیان کنید و
                        دنیا را به روشی جدید ببینید.</p>
                    <p>حل مسئله: برنامه نویسی یک مهارت حل مسئله است. شما باید بتوانید مشکلات را به قطعات کوچکتر تقسیم
                        کنید و راه حل هایی برای آنها پیدا کنید. یادگیری برنامه نویسی می تواند به شما کمک کند تا مهارت
                        های حل مسئله خود را بهبود ببخشید و در زندگی و کار خود موفق تر باشید.</p>
                    <p>تفکر منطقی: برنامه نویسی یک فعالیت منطقی است. شما باید بتوانید از منطق برای فکر کردن به مشکلات و
                        یافتن راه حل های مناسب استفاده کنید. یادگیری برنامه نویسی می تواند به شما کمک کند تا تفکر منطقی
                        خود را بهبود ببخشید و در زندگی و کار خود تصمیمات بهتری بگیرید.</p>
                    <p>یادگیری سایر مهارت ها: برنامه نویسی می تواند به شما کمک کند تا سایر مهارت ها را نیز یاد بگیرید.
                        به عنوان مثال، یادگیری برنامه نویسی می تواند به شما کمک کند تا مهارت های ریاضی، علوم کامپیوتر و
                        زبان انگلیسی خود را بهبود ببخشید.</p>
                    <h2 className="font-YekanBakh-Heavy text-lg sm:text-2xl lg:text-3xl">تاریخچه مختصری از برنامه
                        نویسی</h2>
                    <p>تاریخچه برنامه نویسی به دهه 1940 میلادی باز می گردد. در آن زمان، رایانه ها بسیار بزرگ و گران
                        بودند و فقط در دسترس دانشگاه‌ها و شرکت‌های بزرگ بودند. برنامه نویسی علمی بود که تنها در اختیار
                        افراد بسیار محدودی بود و تنها آن‌ها می‌توانستند فرایند آموزش برنامه نویسی را طی کنند.</p>
                    <h2 className="font-YekanBakh-Heavy text-lg sm:text-2xl lg:text-3xl">اولین زبان برنامه نویسی سطح
                        بالا</h2>
                    <p>اولین زبان برنامه نویسی، Plankalkül نام داشت که توسط Konrad Zuse در سال های 1942 تا 1945 توسعه
                        یافت. این زبان یک زبان برنامه نویسی سطح بالا بود که از مفهوم تابع استفاده می کرد. Plankalkül
                        هرگز به صورت گسترده‌ای استفاده نشد، اما تأثیر زیادی بر توسعه زبان‌های برنامه نویسی بعدی
                        داشت.</p>
                </div>
                {/*<!-- ! -------------------- Effect -------------------- ! -->*/}
                <div className={`${isShowBox ? 'hidden' : 'block'} h-56 absolute bottom-0 right-0 left-0 bg-gradient-to-t from-white to-transparent dark:from-dark-890 dark:to-dark-890/0 rounded-b-lg`}></div>
                {/*<!-- ! -------------------- Btn -------------------- ! -->*/}
                <button onClick={toggleShowBox}
                        className="absolute -bottom-6 right-1/2 translate-x-1/2 inline-flex items-center gap-x-2 border border-gray-210 dark:border-white dark:hover:border-blue-450 hover:bg-gray-300 dark:bg-dark-890 dark:hover:bg-dark-890 px-4 py-2 rounded-lg text-gray-300 hover:text-white dark:text-white dark:hover:text-blue-450 cursor-pointer transition-all">
                    <span className="font-YekanBakh-Bold text-xl">{isShowBox ? 'بستن مطلب' : 'مشاهده بیشتر'}</span>
                    {isShowBox ? (<DynamicIcon name={'eyeSlash'} className={'size-5.5'}/>) :
                        <DynamicIcon name={'eye'} className={'size-5.5'}/>}
                </button>
            </div>
        </section>
    );
}

export default DescriptionSection;