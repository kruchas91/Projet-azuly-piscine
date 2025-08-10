import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header_jardin.css';


function Header_jardin() {
    return (
        <header className="header-jardin">
            <nav className="nav">
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/page_prestation">Nos prestations</Link></li>
                    <li><Link to="/page_produit">Nos produits</Link></li>
                    <li><Link to="/page_jardin">Jardin</Link></li>
                    <li><Link to="/page_contact">Nous contacter</Link></li>
                    <li><Link to="/Page_magasin">NOTRE MAGASIN</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header_jardin;