const accordions = [
    {
        id: 1,
        title: "آیا نقشه‌ راه راکت کامل است ؟",
        message: "تا آنجایی که امکانش وجود داشت ما در راکت سعی کرده‌ایم نقشه‌ راه کامل و مشخصی برای شروع و تکمیل یک مهارت برنامه‌نویسی را برایتان مشخص کنیم از این رو می‌توانید مطمئن باشید با طی کردن هر کدام از مسیر‌های یادگیری، می‌توانید مهارت مورد نظر خود را فرا بگیرید."
    },
    {
        id: 2,
        title: "تمام قدم‌های مسیر یادگیری را مشاهده کنیم؟",
        message: "اگر قصد دارید یک مهارت برنامه‌نویسی را به درستی فرا بگیرید و از آن برای پیاده سازی پروژه‌های خود استفاده کنید، بله باید تمام قدم‌های که در نقشه راه یک مهارت آورده شده را قدم به قدم طی کنید و تمرین‌های موجود در هر قدم را انجام دهید. تا سرا انجام بتوانید آن مهارت را فرا بگیرید."
    },
    {
        id: 3,
        title: "آیا قدم‌های نقشه راه به روز می‌شوند؟",
        message: "جواب این سوال بله است، ما در راکت سعی داریم همیشه مطالب به روز و کاربردی را در اختیار کاربرانمان قرار دهیم از این رو می‌توانید از به روز بودن محتوا و کاربردی بودن آن‌ها اطمینان حاصل کنید."
    }
]

const coursesCategory = [
    {
        id: 1,
        courseName: " لاراول",
        courseID: "Laravel"
    },
    {
        id: 2,
        courseName: "کاربردی",
        courseID: "Practical"
    },
    {
        id: 3,
        courseName: " وردپرس",
        courseID: "Wordpress"
    },
    {
        id: 4,
        courseName: " جاوا",
        courseID: "java"
    },
    {
        id: 5,
        courseName: " جاوااسکریپت",
        courseID: "Javascript"
    },
    {
        id: 6,
        courseName: "  اندروید",
        courseID: "Android"
    },
    {
        id: 7,
        courseName: "  پایتون",
        courseID: "python"
    },
    {
        id: 8,
        courseName: "  طراحی وب",
        courseID: "Front-end"
    },
    {
        id: 9,
        courseName: "  کسب‌ و کار",
        courseID: ""
    },
    {
        id: 10,
        courseName: "  دواپس",
        courseID: "DevOps"
    },
]

const timeFilters = [
    {id: 1, label: "بروزترین", value: "newest"},
    {id: 2, label: "جدیدترین", value: "latest"},
    {id: 3, label: "قدیمی ترین", value: "oldest"},
    {id: 4, label: "هفته پیش", value: "week"},
    {id: 5, label: "ماه پیش", value: "month"},
    {id: 6, label: "سال پیش", value: "year"},
];

const displayFilters = [
    {id: 1, label: "همه", value: "all"},
    {id: 2, label: "محبوب ترین", value: "popular"},
    {id: 3, label: "پربازدیدترین", value: "mostViewed"},
]

const coursesTabs = [
    {
        id: 1,
        key: "current-courses",
        label: "دوره های جاری",
        icon: "playSquare"
    },
    {
        id: 2,
        key: "purchased-courses",
        label: "دوره های خریداری شده",
        icon: "playSquareEye"
    },
    {
        id: 3,
        key: "completed-courses",
        label: "دوره های گذرانده شده",
        icon: "playSquareEye"
    },
    {
        id: 4,
        key: "inactive-courses",
        label: "دوره های غیر فعال",
        icon: "playSquareEyeSlash"
    },
]

const questionTabs = [
    {
        id: 1,
        key: "active-questions",
        label: "پرسش های جاری",
        icon: "questionSquare",
    },
    {
        id: 2,
        key: "locked-questions",
        label: "پرسش های قفل شده",
        icon: "securityQuestion",
    },
    {
        id: 3,
        key: "my-answers",
        label: "پاسخ های من",
        icon: "commentBox",
    },
];

const followingTabs = [
    {
        id: 1,
        key: "articles",
        label: "مقالات",
        icon: "document",
    },
    {
        id: 2,
        key: "podcasts",
        label: "پادکست ها",
        icon: "podcast",
    },
    {
        id: 3,
        key: "questions",
        label: "پرسش ها",
        icon: "questionSquare",
    },
    {
        id: 4,
        key: "comments",
        label: "نظرات",
        icon: "commentBox",
    },
    {
        id: 5,
        key: "people",
        label: "افراد",
        icon: "user",
    },
];

const commentTabs = [
    {
        id: 1,
        key: "articles",
        label: "مقالات",
        icon: "document",
    },
    {
        id: 2,
        key: "podcasts",
        label: "پادکست ها",
        icon: "podcast",
    },
    {
        id: 3,
        key: "courses",
        label: "دوره ها",
        icon: "camera",
    },
    {
        id: 4,
        key: "sessions",
        label: "جلسات",
        icon: "play",
    },
];

const notificationTabs = [
    {
        id: 1,
        key: "unread-notifications",
        label: "اعلانات خوانده نشده",
        icon: "document",
    },
    {
        id: 2,
        key: "read-notifications",
        label: "اعلانات خوانده شده",
        icon: "commentBox",
    },
];

const missionTabs = [
    {
        id: 1,
        key: "urgent-missions",
        label: "ماموریت های ضروری",
        value: 2,
    },
    {
        id: 2,
        key: "required-missions",
        label: "ماموریت های لازم",
        value: 2,
    },
    {
        id: 3,
        key: "normal-missions",
        label: "ماموریت های معمولی",
        value: 2,
    },
];

const certificateTabs = [
    {
        id: 1,
        key: "online-certificates",
        label: "گواهی های مشاهده آنلاین",
    },
    {
        id: 2,
        key: "technical-approvals",
        label: "تاییدیه های فنی",
    },
];



const aboutUsData = [
    {
        id: "activity-1",
        title: "آموزش آنلاین",
        image: "/images/about-us-image/corinne-kutz.png",
        paragraphs: [
            {
                id: "activity-1-paragraph-1",
                type: "text",
                content:
                    "مهم‌ترین بخشی که راکت بر اساس آن بنا نهاده شده، بخش آموزش آنلاین سایت است. در این بخش سعی داریم کار با جدیدترین زبان‌ها، فریم‌ورک‌ها و ابزارهای برنامه‌نویسی جهان را به فارسی‌زبانان آموزش دهیم."
            },
            {
                id: "activity-1-paragraph-2",
                type: "text",
                content:
                    "ما در راکت تمام سعی خود را می‌کنیم تا بتوانیم دوره‌های به‌روز و کاربردی را در اختیار شما قرار دهیم و شما را برای ورود به بازار کار آماده کنیم."
            }
        ],
        button: {
            id: "activity-1-button",
            title: "مشاهده آموزش‌های آنلاین",
            url: "/courses-page"
        }
    },
    {
        id: "activity-2",
        title: "حل مشکلات برنامه‌نویسی",
        image: "/images/about-us-image/christopher-gower.png",
        paragraphs: [
            {
                id: "activity-2-paragraph-1",
                type: "text",
                content:
                    "بخش مهمی از مسیر یادگیری یک زبان، حل کردن مشکلات و صحبت با برنامه‌نویسان دیگر برای بررسی دیدگاه‌های آن‌ها درباره زبان یا ابزار موردنظر است."
            },
            {
                id: "activity-2-paragraph-2",
                type: "text",
                content:
                    "در بخش پرسش و پاسخ راکت می‌توانید سؤال‌های مختلف خود را در حوزه‌های گوناگون مطرح کنید و برای حل مشکلات یا درک بهتر مسائل با دیگر برنامه‌نویسان گفتگو کنید."
            }
        ],
        button: {
            id: "activity-2-button",
            title: "مشاهده پرسش و پاسخ‌ها",
            url: "/coming-soon"
        }
    },
    {
        id: "activity-3",
        title: "مقالات آموزشی",
        image: "/images/about-us-image/markus-winkler.png",
        paragraphs: [
            {
                id: "activity-3-paragraph-1",
                type: "text",
                content:
                    "مقالات متنی از دیر باز بخش مهمی از سطوح کسب دانش را تشکیل داده‌اند. ما در راکت از این بخش صرف‌نظر نکرده‌ایم و به شکل جدی سعی در ارائه مقالات به‌روز و در سطح جهانی کرده‌ایم به شکلی که از شروع کار راکت تا به امروز هزاران مقاله آموزشی در عناوین مختلف را به زبان فارسی در وب‌سایت راکت قرار داده‌ایم تا فارسی‌زبانان عزیز بتوانند با خواندن این نوع مقالات به میزان دانش خود، هر چند کم، مقداری بیافزایند."
            },
            {
                id: "activity-3-paragraph-2",
                type: "mixed",
                content: [
                    {
                        id: "activity-3-paragraph-2-item-1",
                        type: "text",
                        content: "ما در راکت سعی کرده‌ایم این مقاله را در طیف بسیار متنوع، از جمله "
                    },
                    {
                        id: "activity-3-paragraph-2-item-2",
                        type: "link",
                        content: "تجربه‌کاربری",
                        url: "/courses-page"
                    },
                    {
                        id: "activity-3-paragraph-2-item-3",
                        type: "text",
                        content: "، "
                    },
                    {
                        id: "activity-3-paragraph-2-item-4",
                        type: "link",
                        content: "توسعه فردی",
                        url: "/courses-page"
                    },
                    {
                        id: "activity-3-paragraph-2-item-5",
                        type: "text",
                        content: " و دنیای بزرگ "
                    },
                    {
                        id: "activity-3-paragraph-2-item-6",
                        type: "link",
                        content: "برنامه‌نویسی",
                        url: "/courses-page"
                    },
                    {
                        id: "activity-3-paragraph-2-item-7",
                        type: "text",
                        content:
                            " در دسترس فارسی‌زبانان عزیز قرار دهیم تا هر شخصی با هر سلیقه‌ای بتواند از مقالات راکت بهره‌مند شود."
                    }
                ]
            }
        ],
        button: {
            id: "activity-3-button",
            title: "مشاهده مقالات راکت",
            url: "/articles"
        }
    },
    {
        id: "activity-4",
        title: "راکت‌کست",
        image: "/images/about-us-image/will-francis.png",
        paragraphs: [
            {
                id: "activity-4-paragraph-1",
                type: "text",
                content:
                    "در کنار ویدیو و متن، بخش دیگری هم وجود دارد که بسیار مهم است و آن صداست. با استفاده از پادکست می‌توانید از زمان‌هایی که تنها قادر به گوش دادن هستید، برای یادگیری استفاده کنید."
            },
            {
                id: "activity-4-paragraph-2",
                type: "text",
                content:
                    "ما در راکت بخشی تحت عنوان راکت‌کست راه‌اندازی کرده‌ایم تا دیدگاه‌های شخصی و موضوعات مهمی را که می‌توان از طریق صدا منتقل کرد، با شما به اشتراک بگذاریم."
            }
        ],
        button: {
            id: "activity-4-button",
            title: "مشاهده راکت‌کست‌ها",
            url: "/podcasts"
        }
    }
];



export {accordions, coursesCategory, timeFilters , displayFilters , coursesTabs, questionTabs , followingTabs ,commentTabs ,notificationTabs,missionTabs,certificateTabs, aboutUsData};