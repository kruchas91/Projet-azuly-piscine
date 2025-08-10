import Header from '../composants/Header';
import Footer from '../composants/Footer';
import Produits from '../composants/Produits';

function Pageproduit() {
    return (
        <div className="page-produit">
            <Header />
            <Produits />
            <Footer />
        </div>
    );
}

export default Pageproduit;