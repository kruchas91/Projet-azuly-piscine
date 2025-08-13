import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './Pages/Page_acceuil';
import Page_prestation from './Pages/Page_prestation';
import Page_produit from './Pages/Page_produit';
import Page_jardin from './Pages/Page_jardin';
import Page_contact from './Pages/Page_contact';
import Page_magasin from './Pages/Page_magasin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/page_prestation" element={<Page_prestation />} />
        <Route path='page_accueil' element={<Acceuil />} />
        <Route path="/page_produit" element={<Page_produit/>} />
        <Route path="/Page_jardin" element={<Page_jardin />} />
        <Route path="/Page_contact" element={<Page_contact/>} />
        <Route path="/Page_magasin" element={<Page_magasin />} />
      </Routes>
    </Router>
  );
}

export default App;