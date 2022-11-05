import { MutableRefObject, useEffect, useState } from "react";

export const useHandleComponentHeight = (
    ref: MutableRefObject<HTMLDivElement | null>
): number => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.clientHeight);
        }
    }, [ref]);

    return height;
};