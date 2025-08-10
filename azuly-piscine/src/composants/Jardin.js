import Taille_haie from '../assets/taille-haie.png';
import Debroussailleuse from '../assets/debroussaillage.png';
import Tonte from '../assets/tonte.png';
import Logomainverte from '../assets/logomainverte.png';
import Jardinierssap2 from '../assets/jardinierssap2.png';
import '../styles/Jardin.css';


function Jardin() {
    return (
        <div className="jardin">
            <img src={Logomainverte} alt="Logo Main Verte" className="logo-main-verte" />
            <h1>Aménagement et entretien d'espace verts</h1>
            <div className="services">
                <div className="Taille_haie">
                    <img src={Taille_haie} alt="Taille de haie" />
                    <h2>Taille de haie</h2>
                </div>
                <div className="Debroussaillage">
                    <img src={Debroussailleuse} alt="Débroussaillage" />
                    <h2>Débroussaillage</h2>
                </div>
                <div className="Création">
                    
                    <h2>Création de jardin</h2>
                </div>
                <div className="Tonte">
                    <img src={Tonte} alt="Tonte de pelouse" />
                    <h2>Tonte de pelouse</h2>
                </div>
            </div>
            <h2>Jardiniers SAP</h2>
            <p>Nous vous proponsons divers services pour créer et entretenir tout vos espaces verts, nous sommes spécialisés dans toutes les catégories en matiére d'entretien d'espaces verts,que ce soit pour la tonte, le débroussaillage, la taille de haies, d'arbustes, de plantes ou de fleurs. Ces services peuvent être réalisés dans le cadre du Service à la Personne, offrant ainsi des avantages fiscaux en crédits d'impôt.  </p>
            <div className="jardiniers">
                
                <div className="jardiniers-sap-info">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <a href="/charte.pdf" target="_blank" rel="noopener noreferrer" className="pdf-link">
                    CONSULTEZ LA CHARTE NATIONALE DE QUALITE POUR LES SERVICES A LA PERSONNE (PDF)
                    </a>
                </div>
                <img src={Jardinierssap2} alt="Jardiniers SAP 2" className="jardiniers-sap2" />
            </div>
        </div>
    );
}

export default Jardin;