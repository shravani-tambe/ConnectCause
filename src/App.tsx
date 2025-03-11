import { Suspense } from "react";
import { useRoutes, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import IndividualDashboard from "./components/dashboard/IndividualDashboard";
import NGOGrid from "./components/ngo/NGOGrid";
import EventList from "./components/events/EventList";
import NGOProfile from "./components/ngo/NGOProfile";
import EventDetails from "./components/events/EventDetails";
import About from "./components/pages/About";
import Help from "./components/pages/Help";
import Blog from "./components/pages/Blog";
import FAQ from "./components/pages/FAQ";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import Cookies from "./components/pages/Cookies";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<IndividualDashboard />} />
        <Route path="/browse-ngos" element={<NGOGrid />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/ngo/:id" element={<NGOProfile />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
