import { useCallback, useEffect, useState } from "react";

export default function useScrollPosition() {
  const [scrollPosi, setScrollPosi] = useState(0);

  const scrollCallback = useCallback(() => {
    setScrollPosi(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollCallback]);
  return scrollPosi;
}
