"use client";

import { useEffect, useState } from "react";

const InstallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [browserName, setBrowserName] = useState("");
  const [isUnsupported, setIsUnsupported] = useState(false);

  // Browser detection utility
  const getBrowserName = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes("Chrome") && !userAgent.includes("Edge"))
      return "Chrome";
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
      return "Safari";
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Edge")) return "Edge";
    return "Other";
  };

  useEffect(() => {
    setBrowserName(getBrowserName());

    // Detect if browser supports PWA installation
    if (!("beforeinstallprompt" in window)) {
      setIsUnsupported(true); // Mark unsupported browsers
    }

    // Handle beforeinstallprompt event
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      (deferredPrompt as any).prompt();
      const choiceResult = await (deferredPrompt as any).userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setIsVisible(false);
    } else {
      // Show error if PWA installation is unsupported
      if (isUnsupported) {
        alert(
          "Browser Anda tidak mendukung PWA otomatis. Silakan coba browser lain seperti Chrome atau Firefox."
        );
      } else {
        alert(
          browserName === "Safari"
            ? "Untuk menginstal di Safari, klik tombol 'Share' lalu pilih 'Add to Home Screen'."
            : "Browser Anda tidak mendukung instalasi otomatis. Ikuti panduan di website."
        );
      }
    }
  };

  return (
    <>
      {isVisible || browserName !== "Chrome" ? (
        <button
          onClick={handleInstallClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          Install App
        </button>
      ) : null}
    </>
  );
};

export default InstallButton;
