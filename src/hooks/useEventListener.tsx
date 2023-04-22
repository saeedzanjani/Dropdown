// Packages
import { useEffect, useRef } from "react";

const useEventListener = (
  eventType: string = "",
  listener: Function = () => null,
  target: any = window,
  options: any = null
) => {
  // Hooks
  const savedListener = useRef<HTMLDivElement | any>();

  // Lifecycle
  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target.addEventListener) return;
    const eventListener = (e: any) => savedListener.current(e);
    target.addEventListener(eventType, eventListener, options);

    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
};

export default useEventListener;
