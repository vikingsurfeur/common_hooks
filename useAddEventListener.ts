// Add an event listener to an element or window object
import {
    useEffect,
    useRef,
    useLayoutEffect,
    Dispatch,
    SetStateAction,
    MutableRefObject,
} from "react";

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

// TODO: Define your right type for the handler argument and the event
export const useEventListener = (
    eventName: string,
    handler: Dispatch<SetStateAction<boolean>>,
    element?: MutableRefObject<HTMLElement | null>
) => {
    const savedHandler = useRef(handler);

    useIsomorphicLayoutEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const targetElement = element?.current || window;
        if (!(targetElement && targetElement.addEventListener)) return;

        const eventListener = (event: any) => savedHandler.current(event);
        targetElement.addEventListener(eventName, eventListener);

        return () => {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};
