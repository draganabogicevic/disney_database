import { useState, useRef, useEffect } from "react";

export const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFn = (enteries) => {
    enteries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const contRef = containerRef.current;
    const observer = new IntersectionObserver(callbackFn, options);
    if (containerRef && contRef) observer.observe(contRef);

    return () => {
      if (containerRef && contRef) observer.unobserve(contRef);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
