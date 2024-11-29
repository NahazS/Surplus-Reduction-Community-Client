import React, { useEffect, useRef, useState } from "react";

const FloatingBox = () => {
  const containerRef = useRef(null);
  const [floatingStyle, setFloatingStyle] = useState({
    position: "absolute",
    top: "100px",
  });

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    // Get the container's position relative to the viewport
    const containerRect = container.getBoundingClientRect();

    // Get the total scroll position from top of the page
    const scrollY = window.scrollY;
    const containerTop = container.offsetTop;
    const containerBottom = containerTop + container.offsetHeight;

    const topBoundary = 100; // Start floating here
    const bottomBoundary = containerBottom - 200; // Stop floating here

    // Calculate current floating element position
    if (scrollY + topBoundary > containerTop && scrollY + topBoundary < bottomBoundary) {
      setFloatingStyle({
        position: "fixed",
        top: `${topBoundary+100}px`,
      });
    } else if (scrollY + topBoundary <= containerTop) {
      setFloatingStyle({
        position: "absolute",
        top: "100px",
      });
    } else if (scrollY + topBoundary + 100 >= bottomBoundary) {
      setFloatingStyle({
        position: "absolute",
        top: "90%"
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "1000px",
        margin: "100px auto",
        width: "80%",
        border: "1px solid black",
        position: "relative",
      }}
    >
      <h1>nahaz</h1>
      <div
        style={{
          ...floatingStyle,
          width: "200px",
          backgroundColor: "#4caf50",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        Team Section
      </div>
    </div>
  );
};

export default FloatingBox;