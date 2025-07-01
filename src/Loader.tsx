import { useState, useEffect } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // Start fade-out
    }, 3500); // How long to show loader before fade starts

    const removeTimer = setTimeout(() => {
      setVisible(false); // Remove from DOM after fade completes
    }, 6000); // Show + fade duration

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-overlay ${fade ? "fade-out" : ""}`}>
      <div className="loader-blob"></div>
      <p className="loader-text">Loading Shivam’s Portfolio...</p>
    </div>
  );
}
