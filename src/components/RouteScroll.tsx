import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScroll = () => {
  const { pathname, hash, key } = useLocation();
  useLayoutEffect(() => {
    // Wait until the destination page and its anchors are in the DOM.
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
      else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
};
export default RouteScroll;
