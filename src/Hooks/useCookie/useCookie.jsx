import { useState } from "react";

const useCookie = (key, defaultValue) => {

    const [state, setState] = useState(() => {
        const cookies = document.cookie.split("; ");

        const cookie = cookies.find(item =>
            item.startsWith(`${key}=`)
        );

        return cookie ? cookie.split("=")[1] : defaultValue;
    });

    const setValue = (value, days = 7) => {

        const expires = new Date();

        expires.setTime(
            expires.getTime() + days * 24 * 60 * 60 * 1000
        );

        setState(value);

        document.cookie =
            `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
    };

    return [state, setValue];
};

export default useCookie;