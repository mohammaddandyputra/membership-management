"use client";
import React, { useState, useEffect } from "react";
import { Main, Navbar, Sidebar } from "@/components/atoms";
import { MasterLayoutProps } from "@/types/layout";

const MainLayout = ({ isBlankLayout = false, children }: MasterLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return isBlankLayout ? (
    children
  ) : (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        handleSidebarOpen={handleSidebarOpen}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main isSidebarOpen={isSidebarOpen}>{children}</Main>
    </>
  );
};

export default MainLayout;
