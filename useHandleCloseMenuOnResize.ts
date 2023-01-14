import { useEffect, useState } from "react";

export const useHandleCloseMenuOnResize = (showMenu: boolean) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);

            if (showMenu && width > 576) {
                return false;
            } else {
                return true;
            }
        }

        window.addEventListener('resize', handleWindowSizeChange);
        
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [width, showMenu])
}
