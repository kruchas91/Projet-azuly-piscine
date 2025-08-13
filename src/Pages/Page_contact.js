import Header from "../composants/Header";
import Logo from "../assets/Logo.png"
import "../styles/Page_contact.css"
import Footer from "../composants/Footer"
import Avis from "../composants/Avis"

function Page_contact() {
    return (
        <div className="page-contact">
            <Header />
            <div className="logoflex">
                <img src={Logo} alt="Logo" className='logo'/>
            </div>
            <h1>Contactez Azuly Piscines</h1>
            <h1>Par telephone au 06 79 10 89 53</h1>
            <h1>Ou bien par mail</h1>
            <i class="fa-solid fa-down-long"></i>
            <div className="Mailsection">
                <div className="mailbtn">
                <a href="mailto:contact@azuly-piscine.fr" className="pulse-text">
                    Envoyez nous un mail PAR ICI ! 
                </a>
                <i className="fa-solid fa-envelopes-bulk"></i>
            </div>
            <div className="Magasin">
                <h1>Notre nouveau magasin vous ouvre désormais ses portes ! </h1>
                <h1>Venez nous rendres visite pour des informations des devis ou bien pour l'achat de produits pour votre piscine ! </h1>
            </div>
            </div>
            <Avis/>
            <Footer/>
        </div>
    );
}

export default Page_contact