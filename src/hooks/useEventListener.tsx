import { useEffect, useRef } from "react";

const useEventListener = (
  eventType: string = "",
  listener: (event: MouseEvent | TouchEvent) => void,
  target: Window | HTMLElement = window,
  options: boolean | AddEventListenerOptions = false
) => {
  const savedListener = useRef<(event: MouseEvent | TouchEvent) => void>();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target.addEventListener) return;
    const eventListener: EventListener = (e: Event) =>
      savedListener.current?.(e as MouseEvent | TouchEvent);
    target.addEventListener(eventType, eventListener, options);

    return () => {
      target.removeEventListener(eventType, eventListener, options);
    };
  }, [eventType, target, options]);
};

export default useEventListener;
