import { useContext, useMemo, useState } from "react";
import {
    Activity, ArrowDownLeft, ArrowUpLeft, Bell, BookOpen, CalendarDays,
    ChevronDown, CircleDollarSign, GraduationCap, LayoutDashboard, LogOut,
    Menu, MessageSquare, Moon, MoreHorizontal, Search, Settings, ShieldCheck,
    Sun, TicketPercent, Users, X
} from "lucide-react";
import { AppContext } from "../../Context/AppContext.jsx";

const navigation = [
    { label: "داشبورد", icon: LayoutDashboard, active: true },
    { label: "مدیریت کاربران", icon: Users, count: "—" },
    { label: "مدیریت دوره‌ها", icon: BookOpen },
    { label: "سفارش‌ها و پرداخت‌ها", icon: CircleDollarSign },
    { label: "نظرات و دیدگاه‌ها", icon: MessageSquare, count: "—" },
    { label: "کدهای تخفیف", icon: TicketPercent },
];

const metrics = [
    { label: "کل کاربران", value: "—", note: "آمار کاربران ثبت‌نام‌شده", icon: Users, tone: "blue" },
    { label: "دوره‌های فعال", value: "—", note: "دوره‌های منتشرشده", icon: BookOpen, tone: "violet" },
    { label: "فروش این ماه", value: "—", note: "مجموع پرداخت‌های موفق", icon: CircleDollarSign, tone: "green" },
    { label: "دیدگاه‌های جدید", value: "—", note: "در انتظار بررسی", icon: MessageSquare, tone: "orange" },
];

const chartData = [32, 44, 39, 57, 48, 68, 61, 76, 63, 83, 72, 91];

function AdminPanel() {
    const { theme, setTheme, userInfo } = useContext(AppContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeRange, setActiveRange] = useState("۱۲ ماه اخیر");
    const isDark = theme === "dark";

    const chartPoints = useMemo(
        () => chartData.map((value, index) => `${index * 64 + 12},${150 - value * 1.35}`).join(" "),
        []
    );

    const adminName = userInfo?.fullName || userInfo?.full_name || "مدیر راکت";

    return (
        <main dir="rtl" className="min-h-screen bg-[#F5F7FB] text-slate-800 transition-colors dark:bg-[#0B1728] dark:text-slate-100">
            {isSidebarOpen && (
                <button aria-label="بستن منو" onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 z-40 bg-slate-950/50 xl:hidden" />
            )}

            <aside className={`fixed inset-y-0 right-0 z-50 flex w-[270px] flex-col border-l border-slate-200/80 bg-white px-5 py-6 transition-transform duration-300 dark:border-white/8 dark:bg-[#101F33] xl:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="mb-10 flex items-center justify-between px-2">
                    <a href="/" className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"><GraduationCap size={25} /></span>
                        <span><span className="block text-xl font-black tracking-tight">راکت</span><span className="text-[11px] font-medium text-slate-400">مدیریت هوشمند</span></span>
                    </a>
                    <button onClick={() => setIsSidebarOpen(false)} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 xl:hidden dark:hover:bg-white/10"><X size={19} /></button>
                </div>

                <div className="mb-3 px-3 text-[10px] font-bold tracking-[.18em] text-slate-400">منوی اصلی</div>
                <nav className="space-y-1.5">
                    {navigation.map(({ label, icon: Icon, active, count }) => (
                        <button key={label} onClick={() => setIsSidebarOpen(false)} className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all ${active ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/6 dark:hover:text-white"}`}>
                            <span className="flex items-center gap-3"><Icon size={19} strokeWidth={1.8} /><span>{label}</span></span>
                            {count && <span className={`rounded-lg px-2 py-0.5 text-[10px] ${active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400 dark:bg-white/8"}`}>{count}</span>}
                        </button>
                    ))}
                </nav>

                <div className="mb-3 mt-9 px-3 text-[10px] font-bold tracking-[.18em] text-slate-400">تنظیمات</div>
                <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/6"><Settings size={19} /> تنظیمات پنل</button>

                <div className="mt-auto rounded-2xl border border-blue-100 bg-blue-50/80 p-4 dark:border-blue-400/15 dark:bg-blue-500/8">
                    <div className="mb-2 flex items-center gap-2 text-blue-700 dark:text-blue-300"><ShieldCheck size={18} /><span className="text-xs font-bold">فضای مدیریت</span></div>
                    <p className="text-[11px] leading-6 text-slate-500 dark:text-slate-400">مدیریت محتوای آموزشی و کاربران را از یک فضای یکپارچه انجام دهید.</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-blue-100 dark:bg-blue-300/10"><div className="h-full w-2/3 rounded-full bg-blue-600" /></div>
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/8">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-black text-white">{adminName.slice(0, 1)}</div>
                    <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{adminName}</p><p className="text-[10px] text-slate-400">مدیر سیستم</p></div>
                    <LogOut size={17} className="text-slate-400" />
                </div>
            </aside>

            <section className="min-h-screen xl:mr-[270px]">
                <header className="sticky top-0 z-30 flex h-[82px] items-center justify-between border-b border-slate-200/70 bg-white/85 px-4 backdrop-blur-xl dark:border-white/8 dark:bg-[#0B1728]/85 sm:px-7 lg:px-10">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setIsSidebarOpen(true)} aria-label="باز کردن منو" className="rounded-xl border border-slate-200 p-2.5 text-slate-600 xl:hidden dark:border-white/10 dark:text-slate-200"><Menu size={19} /></button>
                        <div><p className="text-xs text-slate-400">پنل مدیریت / <span className="text-blue-600 dark:text-blue-400">داشبورد</span></p><h1 className="mt-1 text-lg font-black sm:text-xl">نمای کلی</h1></div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="hidden h-10 w-56 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-400 md:flex dark:border-white/8 dark:bg-white/4"><Search size={16} /><span className="text-xs">جستجو در پنل...</span><kbd className="mr-auto rounded border border-slate-200 px-1.5 py-0.5 text-[9px] dark:border-white/10">⌘ K</kbd></div>
                        <button onClick={() => setTheme(isDark ? "light" : "dark")} aria-label="تغییر پوسته" className="flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-100 dark:border-white/8 dark:text-slate-300 dark:hover:bg-white/8">{isDark ? <Sun size={18} /> : <Moon size={18} />}</button>
                        <button aria-label="اعلان‌ها" className="relative flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-100 dark:border-white/8 dark:text-slate-300 dark:hover:bg-white/8"><Bell size={18} /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-[#0B1728]" /></button>
                    </div>
                </header>

                <div className="mx-auto max-w-[1600px] space-y-7 px-4 py-7 sm:px-7 lg:px-10 lg:py-9">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div><p className="mb-2 text-sm font-medium text-slate-400">خوش برگشتی 👋</p><h2 className="text-2xl font-black tracking-tight sm:text-[28px]">سلام، {adminName}</h2><p className="mt-2 text-xs text-slate-400 sm:text-sm">اینجا می‌تونی وضعیت کلی پلتفرم راکت رو مدیریت کنی.</p></div>
                        <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-500 dark:border-white/8 dark:bg-white/4 dark:text-slate-300"><CalendarDays size={16} /> {new Intl.DateTimeFormat("fa-IR", { dateStyle: "long" }).format(new Date())}</div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
                        {metrics.map(({ label, value, note, icon: Icon, tone }) => {
                            const tones = { blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400", violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400", green: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400", orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400" };
                            return <article key={label} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_5px_24px_rgba(15,23,42,.025)] transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/8 dark:bg-[#101F33]">
                                <div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</span><span className={`flex size-10 items-center justify-center rounded-xl ${tones[tone]}`}><Icon size={19} /></span></div>
                                <div className="mt-5 flex items-end justify-between"><strong className="text-3xl font-black tracking-tight">{value}</strong><span className="mb-1 flex items-center gap-1 text-[10px] text-slate-400">{note}</span></div>
                            </article>;
                        })}
                    </div>

                    <div className="grid grid-cols-1 gap-5 2xl:grid-cols-3">
                        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 2xl:col-span-2 dark:border-white/8 dark:bg-[#101F33]">
                            <div className="mb-7 flex flex-wrap items-center justify-between gap-3"><div><h3 className="font-extrabold">روند فعالیت پلتفرم</h3><p className="mt-1 text-[11px] text-slate-400">نمایش نمودار پس از اتصال داده‌های آماری</p></div><button onClick={() => setActiveRange(activeRange === "۱۲ ماه اخیر" ? "۳۰ روز اخیر" : "۱۲ ماه اخیر")} className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-[11px] font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300">{activeRange}<ChevronDown size={14} /></button></div>
                            <div className="flex h-[220px] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-white/[.02]">
                                <div className="text-center"><div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500"><Activity size={22} /></div><p className="text-sm font-bold text-slate-600 dark:text-slate-300">آماده اتصال به آمار واقعی</p><p className="mt-1 text-[11px] text-slate-400">با اتصال داده‌های فروش و ثبت‌نام، نمودار اینجا نمایش داده می‌شود.</p></div>
                            </div>
                            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4 dark:border-white/8"><div><p className="text-[10px] text-slate-400">بازدید امروز</p><p className="mt-1 text-sm font-bold">—</p></div><div><p className="text-[10px] text-slate-400">ثبت‌نام جدید</p><p className="mt-1 text-sm font-bold">—</p></div><div><p className="text-[10px] text-slate-400">نرخ تبدیل</p><p className="mt-1 text-sm font-bold">—</p></div></div>
                        </section>

                        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 dark:border-white/8 dark:bg-[#101F33]">
                            <div className="mb-5 flex items-center justify-between"><div><h3 className="font-extrabold">دسترسی سریع</h3><p className="mt-1 text-[11px] text-slate-400">کارهای پرکاربرد مدیریت</p></div><MoreHorizontal size={19} className="text-slate-400" /></div>
                            <div className="space-y-3">
                                {[
                                    { icon: Users, title: "افزودن کاربر جدید", desc: "ساخت حساب کاربری", color: "text-blue-500 bg-blue-500/10" },
                                    { icon: BookOpen, title: "ایجاد دوره آموزشی", desc: "افزودن محتوای تازه", color: "text-violet-500 bg-violet-500/10" },
                                    { icon: TicketPercent, title: "تعریف کد تخفیف", desc: "مدیریت کمپین فروش", color: "text-emerald-500 bg-emerald-500/10" },
                                    { icon: MessageSquare, title: "بررسی دیدگاه‌ها", desc: "مدیریت بازخوردها", color: "text-orange-500 bg-orange-500/10" },
                                ].map(({ icon: Icon, title, desc, color }) => <button key={title} className="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-3 text-right transition hover:border-blue-200 hover:bg-blue-50/50 dark:border-white/6 dark:hover:border-blue-400/20 dark:hover:bg-blue-400/5"><span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${color}`}><Icon size={18} /></span><span className="min-w-0 flex-1"><span className="block text-xs font-bold">{title}</span><span className="mt-1 block text-[10px] text-slate-400">{desc}</span></span><ArrowUpLeft size={15} className="text-slate-400" /></button>)}
                            </div>
                        </section>
                    </div>

                    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-white/8 dark:bg-[#101F33]">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-5 dark:border-white/8 sm:px-6"><div><h3 className="font-extrabold">آخرین فعالیت‌ها</h3><p className="mt-1 text-[11px] text-slate-400">رویدادهای اخیر کاربران و محتوای سایت</p></div><button className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-[11px] font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300"><ArrowDownLeft size={14} /> مشاهده همه</button></div>
                        <div className="flex min-h-44 flex-col items-center justify-center px-5 py-8 text-center"><span className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-white/5"><Activity size={21} /></span><p className="text-sm font-bold text-slate-600 dark:text-slate-300">هنوز فعالیتی برای نمایش وجود ندارد</p><p className="mt-1 text-[11px] text-slate-400">پس از اتصال رویدادها و داده‌های مدیریتی، گزارش فعالیت‌ها اینجا قرار می‌گیرد.</p></div>
                    </section>
                    <p className="pb-3 text-center text-[10px] text-slate-400">Roocket Admin · ساخته‌شده برای مدیریت بهتر تجربه یادگیری</p>
                </div>
            </section>
        </main>
    );
}

export default AdminPanel;
