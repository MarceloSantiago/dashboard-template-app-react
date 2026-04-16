import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import i18n from "./i18n";

function AppWithLanguageReload() {
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const handleLanguageChange = () => {
      setReloadKey((k) => k + 1);
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return <App key={reloadKey} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <AppWithLanguageReload />
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>,
);
