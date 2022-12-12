import { useState, useRef, useEffect } from "react";

export const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFn = (enteries) => {
    enteries.forEach((entry) => {
      console.log(entry);
      setIsVisible(entry.isIntersecting);
    });
  };

  const observer = new IntersectionObserver(callbackFn, options);
  console.log(observer);
  // const contRef = containerRef.current;
  useEffect(() => {
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
