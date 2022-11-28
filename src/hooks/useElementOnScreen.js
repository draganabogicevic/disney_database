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
    const observer = new IntersectionObserver(callbackFn, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
