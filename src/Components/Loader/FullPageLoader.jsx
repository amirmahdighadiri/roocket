function FullPageLoader() {
    return (
        <main
            className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-body dark:bg-dark-890"
            role="status"
            aria-label="در حال بررسی وضعیت ورود"
        >
            <div className="relative flex size-24 items-center justify-center">
                <span className="absolute inset-0 rounded-full border-[3px] border-blue-700/10 dark:border-white/10" />
                <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-blue-700 dark:border-t-blue-450" />
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 font-Roboto-Bold text-3xl text-white shadow-contactUsShadow">
                    G
                </span>
            </div>
            <span className="sr-only">لطفاً صبر کنید...</span>
        </main>
    );
}

export default FullPageLoader;
