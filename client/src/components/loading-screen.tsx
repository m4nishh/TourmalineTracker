import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen" role="status" aria-label="Loading screen">
      <div className="loading-logo">
        <div className="loading-ring-outer"></div>
        <div className="loading-ring-inner"></div>
        <div className="loading-text">HoH</div>
      </div>
    </div>
  );
}