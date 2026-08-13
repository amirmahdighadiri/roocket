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
export {accordions, coursesCategory, timeFilters , displayFilters};