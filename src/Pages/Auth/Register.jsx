import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DynamicIcon from "../../DynamicIcon/DynamicIcon.jsx";
import Notification from "../../Components/Notification/Notification.jsx";
import { AppContext } from "../../Context/AppContext.jsx";
import useTitle from "../../Hooks/useTitle/useTitle.jsx";
import { registerUser } from "../../Lib/Services/authService.js";

function Register() {
    const navigate = useNavigate();
    const { isShowNotification, setIsShowNotification } = useContext(AppContext);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [notificationValue, setNotificationValue] = useState({
        title: "خطا!",
        message: "",
        Icon: () => <DynamicIcon name="closeCircle" className="size-7 text-blue-700" />,
    });

    const showNotificationHandler = ({ title, message, success = false }) => {
        setNotificationValue({
            title,
            message,
            Icon: () => (
                <DynamicIcon
                    name={success ? "checkCircle" : "closeCircle"}
                    className="size-7 text-blue-700"
                />
            ),
        });
        setIsShowNotification(true);
    };

    const registerHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            showNotificationHandler({
                title: "خطا!",
                message: "رمز عبور و تکرار آن یکسان نیستند.",
            });
            return;
        }

        if (password.length < 6) {
            showNotificationHandler({
                title: "خطا!",
                message: "رمز عبور باید حداقل ۶ کاراکتر داشته باشد.",
            });
            return;
        }

        try {
            setLoading(true);

            const { user, session } = await registerUser({
                fullName: fullName.trim(),
                email: email.trim(),
                password,
            });

            if (user && !session) {
                showNotificationHandler({
                    title: "ثبت‌نام انجام شد",
                    message: "برای فعال‌سازی حساب، ایمیل خود را بررسی و تأیید کنید.",
                    success: true,
                });
                return;
            }

            showNotificationHandler({
                title: "ثبت‌نام موفق",
                message: "حساب شما ساخته شد؛ در حال انتقال به صفحه ورود...",
                success: true,
            });
            navigate("/auth");
        } catch (error) {
            let message = "ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.";

            if (error.message?.toLowerCase().includes("already registered")) {
                message = "این ایمیل قبلاً ثبت‌نام کرده است؛ وارد حساب خود شوید.";
            } else if (error.message?.toLowerCase().includes("password")) {
                message = "رمز عبور واردشده قابل قبول نیست.";
            } else if (error.message) {
                message = error.message;
            }

            showNotificationHandler({ title: "خطا!", message });
        } finally {
            setLoading(false);
        }
    };

    useTitle("راکت | ثبت‌نام");

    return (
        <section dir="rtl" className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
            <Link to="/" className="block mb-9">
                <DynamicIcon name="darkLogo" className="hidden dark:block w-52 h-11.5" />
                <DynamicIcon name="lightLogo" className="dark:hidden block w-52 h-11.5" />
            </Link>

            <div className="w-full max-w-md bg-white dark:bg-dark-930 rounded-2xl py-9 px-6 sm:px-10 dark:text-white shadow-sm">
                <div className="pb-5 border-b border-gray-300/30 font-YekanBakh-Bold">
                    <h2 className="mb-2 text-2xl text-dark-550 dark:text-white">ساخت حساب کاربری</h2>
                    <span className="text-sm text-gray-300 dark:text-gray-210">
                        برای شروع یادگیری، حساب کاربری خود را بسازید.
                    </span>
                </div>

                <form className="mt-5" onSubmit={registerHandler}>
                    <label htmlFor="fullName" className="block mb-2 text-sm font-YekanBakh-Medium">
                        نام و نام خانوادگی
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        required
                        minLength={2}
                        className="w-full h-12 bg-gray-300/10 dark:bg-dark-890 rounded-xl px-4 outline-0 border border-gray-300/30 hover:border-gray-300/60 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 placeholder:text-gray-300 font-Mult-Font-Medium text-sm transition-all duration-200"
                        placeholder="مثلاً علی رضایی"
                    />

                    <label htmlFor="email" className="block mt-4 mb-2 text-sm font-YekanBakh-Medium">
                        ایمیل
                    </label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        className="w-full h-12 bg-gray-300/10 dark:bg-dark-890 rounded-xl px-4 outline-0 border border-gray-300/30 hover:border-gray-300/60 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 placeholder:text-gray-300 font-Mult-Font-Medium text-sm transition-all duration-200"
                        placeholder="example@email.com"
                    />

                    <label htmlFor="password" className="block mt-4 mb-2 text-sm font-YekanBakh-Medium">
                        رمز عبور
                    </label>
                    <input
                        id="password"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        minLength={6}
                        className="w-full h-12 bg-gray-300/10 dark:bg-dark-890 rounded-xl px-4 outline-0 border border-gray-300/30 hover:border-gray-300/60 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 placeholder:text-gray-300 font-Mult-Font-Medium text-sm transition-all duration-200"
                        placeholder="حداقل ۶ کاراکتر"
                    />

                    <label htmlFor="confirmPassword" className="block mt-4 mb-2 text-sm font-YekanBakh-Medium">
                        تکرار رمز عبور
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                        minLength={6}
                        className="w-full h-12 bg-gray-300/10 dark:bg-dark-890 rounded-xl px-4 outline-0 border border-gray-300/30 hover:border-gray-300/60 focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 placeholder:text-gray-300 font-Mult-Font-Medium text-sm transition-all duration-200"
                        placeholder="رمز عبور را دوباره وارد کنید"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 flex-center border text-white border-blue-700 dark:hover:bg-transparent bg-blue-700 hover:text-blue-700 hover:bg-white rounded-lg mt-6 cursor-pointer font-YekanBakh-Bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "در حال ثبت‌نام..." : "ساخت حساب"}
                    </button>
                </form>

                <p className="mt-5 text-center text-sm text-gray-600 dark:text-gray-50">
                    قبلاً حساب ساخته‌اید؟{" "}
                    <Link to="/auth" className="font-YekanBakh-Bold text-blue-700 underline">
                        وارد شوید
                    </Link>
                </p>
            </div>

            <span className="flex items-center gap-1 mt-4 text-gray-400 text-xs">
                همه حقوق برای راکت محفوظ است
            </span>

            <Notification {...notificationValue} isOpen={isShowNotification} />
        </section>
    );
}

export default Register;
