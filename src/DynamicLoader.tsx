import { useEffect, useState } from "react";
import "./Loader.css";

export default function DynamicLoader({ text }: { text: string }) {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fade-out after 2 seconds (you can adjust this)
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 4000);

    // Remove from DOM after fade completes (1s fade)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-overlay ${fade ? "fade-out" : ""}`}>
      <div className="loader-blob"></div>
      <p className="loader-text">{text}</p>
    </div>
  );
}
