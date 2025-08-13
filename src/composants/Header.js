import '../styles/Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <header className="header">
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/Page_prestation">Nos prestations</Link></li>
                <li><Link to="/Page_produit">Nos produits</Link></li>
                <li><Link to="/Page_jardin">Jardin</Link></li>
                <li><Link to="/Page_contact">Nous contacter</Link></li>
                <li><Link to="/Page_magasin">NOTRE MAGASIN</Link></li>
            </ul>
        </nav>
        </header>
    );
    }
  
export default Header;