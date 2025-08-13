import Header from "../composants/Header";
import Footer from "../composants/Footer";
import '../styles/Page_magasin.css';
import Photo_magasin1 from '../assets/photo_magasin1.jpg';
import Photo_magasin2 from '../assets/photo_magasin2.jpg'; 
import Photo_magasin3 from '../assets/photo_magasin3.jpg';
import Photo_magasin4 from '../assets/photo_magasin4.jpg';
import Photo_magasin5 from '../assets/photo_magasin5.jpg';


function PageMagasin() {
    return (
        <div className="page-magasin">
            <Header />
            <div className="magasin-content">
                <h1>Bienvenue dans notre nouveau magasin Azuly piscine ! </h1>
                <div className="magasin-facade">
                    <img src={Photo_magasin1} alt="Magasin Azuly" className="magasin-photo1" />          
                    <img src={Photo_magasin5} alt="Magasin Azuly" className="magasin-photo5" />
                </div>
                <div className="magasin-adresse">
                    <h1>
                      <span className="magasin-adresse-colonne">
                        <span>Notre nouveau magasin vous ouvre ses portes dès aujourd'hui à Barbézieux-Saint-Hilaire à l'adresse suivante :</span>
                        <span className="adresse-magasin">78 Rue du Docteur Meslier 16300 Barbézieux-Saint-Hilaire</span>
                      </span>
                      
                    </h1>
                </div>
                <h1>Horaires d'ouverture :<br/></h1>
                <h2>Lundi/Jeudi/Dimanche : Fermé<br/>
                Mardi/Mercredi/Vendredi : 9h00 - 12h30 / 14h00 - 18h00<br/>
                Samedi : 8h00 - 12h30 
                </h2>
                <div className="magasin-carte">
                    <iframe
                    className="carte-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.7446354520766!2d-0.16054822328027915!3d45.4749478327209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48000928822f3d5f%3A0xb2fc792a3363adac!2sAzuly%20Piscine!5e0!3m2!1sfr!2sfr!4v1754054822225!5m2!1sfr!2sfr"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
                <h2>Découvrez notre large gamme de produits pour votre piscine et jardin ! </h2>
                <div className="magasin-interieur">
                    <img src={Photo_magasin2} alt="Intérieur du magasin Azuly" className="magasin-photo2" />
                    <img src={Photo_magasin3} alt="Intérieur du magasin Azuly" className="magasin-photo3" />
                    <img src={Photo_magasin4} alt="Intérieur du magasin Azuly" className="magasin-photo4" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageMagasin;