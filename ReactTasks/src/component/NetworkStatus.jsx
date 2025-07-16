import React, { useEffect, useState } from "react";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Event listeners
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial",
        background: isOnline ? "#DFF2BF" : "#FFBABA",
        color: isOnline ? "#4F8A10" : "#D8000C",
      }}
    >
      {isOnline ? "🟢 You are Online" : "🔴 You are Offline"}
    </div>
  );
}

export default NetworkStatus;
