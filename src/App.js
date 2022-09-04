import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./layout";
import { Home, Services, About, Team, Contact } from "./pages"

function App() {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
