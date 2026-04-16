import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { LocaleLayout } from "./components/LocaleRouter";
import { PageRouter } from "./components/PageRouter";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import NotFound from "./pages/OtherPage/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/pt" replace />} />

        <Route element={<LocaleLayout />}>
          <Route element={<AppLayout />}>
            <Route path="/:locale/:slug" element={<PageRouter />} />
            <Route path="/:locale" element={<PageRouter />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
