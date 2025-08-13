import Accueil from '../composants/Accueil';
import Avis from '../composants/Avis';
import Footer from '../composants/Footer';
import Galerie from '../composants/Galerie';
import Header from '../composants/Header';
import "../styles/Page_acceuil.css"

function PageAcceuil() {
    return (
        <div className='PageAcceuil'>
            <Header/>
            <Galerie />
            <Accueil />
            <Avis />
            <Footer />
        </div>
    );
}

export default PageAcceuil;