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

    const removeCookie = () => {
        setState(defaultValue);

        document.cookie =
            `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    };


    return [state, setValue, removeCookie];
};

export default useCookie;