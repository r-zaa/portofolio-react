import { useEffect } from "react";

export default function useCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const move = (e) => {
      if (!cursor) return;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
}
