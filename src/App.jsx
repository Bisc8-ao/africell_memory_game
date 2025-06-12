import React, { useEffect, useState } from "react";
import { TimerProvider } from "./context/timerContext";
import { AppRouter } from "./routes";

import "./App.scss";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    // Disable context menu
    const disableContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableContextMenu);

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Log initial window dimensions
    console.log('Window dimensions:', windowSize.width, windowSize.height);

    // Cleanup event listeners when component unmounts
    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width, windowSize.height]);

  return (
    <TimerProvider className="App">
      <AppRouter />
    </TimerProvider>
  );
}

export default App;
