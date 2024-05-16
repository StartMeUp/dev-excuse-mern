import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components";
import {
  HomePage,
  NotFoundPage,
  LostPage,
  ExcusesPage,
  HttpCodePage,
} from "./pages";

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="lost" element={<LostPage />} />
      <Route path="excuses">
        <Route index element={<ExcusesPage />} />
        <Route path=":http_code" element={<HttpCodePage />} />
      </Route>
      {/* 404s */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
