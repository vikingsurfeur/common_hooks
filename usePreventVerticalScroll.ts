import { useEffect } from "react";

export const usePreventVerticalScroll = (bool: boolean) => {
    useEffect(() => {
        if (bool) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [bool]);
};
