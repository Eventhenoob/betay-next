import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.pageX + "px";
        cursorRef.current.style.top = e.pageY + "px";
        cursorRef.current.style.cssText = "left: " + e.pageX + "px; top: " + e.pageY + "px;";
      }
    });
  }, []);
  return <div ref={cursorRef} className="cursor"></div>;
};

export default Cursor;
