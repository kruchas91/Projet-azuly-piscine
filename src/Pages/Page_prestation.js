import Header from "../composants/Header";
import Footer from "../composants/Footer";
import '../styles/page_prestation.css';
import Renovation from "../composants/Renovation";

function PagePrestation() {
    return (
        <div className="page-prestation">
            <Header />
            <Renovation />
            <Footer />
        </div>
    );
}

export default PagePrestation;