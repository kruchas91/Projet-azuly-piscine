import Logo from '../assets/Logo.png';
import '../styles/Accueil.css';

function Accueil() {
    return (
        <div className='accueil-test'>
            <div className='logo-container'>
            <img src={Logo} alt="Logo" className='logo'/>
            <h1 className='description'>
                Votre expert de la piscine 
                pour vous accompagner dans 
                tous vos projets.
            </h1>
        </div>
        <h1 className='titre'>
            Bienvenue chez Azuly Piscine
        </h1>
        <p className='texte'>
            Azuly Piscine est votre partenaire de confiance pour la construction, l'entretien et la rénovation de piscines. <br />
            Notre équipe d'experts passionnés est là pour vous accompagner à chaque étape de votre projet. <br />
            Nous intervenons en Charente mais aussi en Charente-Maritime, Périgord et Gironde. <br />
        </p>
        </div>
    );
}

export default Accueil