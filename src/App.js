import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./layout";
import { Home, Services, About, Team, Contact } from "./pages"

function App() {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path='https://thedevstackers.github.io/thestackers.in' element={<Home />} />
        <Route path='https://thedevstackers.github.io/thestackers.in/services' element={<Services />} />
        <Route path='https://thedevstackers.github.io/thestackers.in/team' element={<Team />} />
        <Route path='https://thedevstackers.github.io/thestackers.in/about' element={<About />} />
        <Route path='https://thedevstackers.github.io/thestackers.in/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
