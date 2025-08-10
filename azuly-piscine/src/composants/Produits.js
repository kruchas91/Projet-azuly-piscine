import Filtre1 from '../assets/test.png';
import Filtre2 from '../assets/Filtre_charge.png';
import Pompe1 from '../assets/Pompe-filtration.png';
import Pompe2 from '../assets/Pompe-eco.png';
import Suppresseur1 from '../assets/Suppresseur.png';
import Electrolyseur1 from '../assets/Electrolyseur1.png';
import Electrolyseur2 from '../assets/Electrolyseur2.png';
import Pompedoseuse1 from '../assets/Pompe-doseuse1.png';
import Pompedoseuse2 from '../assets/Pompe-doseuse2.png';
import Chauffage1 from '../assets/Chauffage1.png';
import Chauffage2 from '../assets/Chauffage2.png';
import Robot1 from '../assets/Robot-nettoyeur.jpg';
import Robot2 from '../assets/Robot-nettoyeur2.jpg';
import Robot3 from '../assets/Robot-nettoyeur-sans-fil.jpg';
import Agedeleau from '../assets/Age-de-leau.png';
import ChloreLent from '../assets/Chlore-lent.jpg';
import ChloreLent2 from '../assets/Chlore-lent2.jpg';
import ph1 from '../assets/ph1.jpg';
import ph2 from '../assets/ph2.jpg';
import ph3 from '../assets/ph3.jpg';
import ph4 from '../assets/ph4.jpg';
import Algicide from '../assets/Algicide1.jpg';
import Gel from '../assets/gel-nettoyant.jpg';
import Sel from '../assets/Sel.jpg';
import Balai from '../assets/Balai.png';
import Brosses from '../assets/Brosses.png';
import Thermometre from '../assets/Thermometre.png';
import Epuisettes from '../assets/Epuisettes.png';
import Volet from '../assets/Volet-hors-sol.jpg';
import Volet2 from '../assets/Volet-immerge.jpg';
import Bache1 from '../assets/couverture-a-barres.jpg';
import Bache2 from '../assets/couverture-a-bulles.jpg';
import Bache3 from '../assets/couverture-a-barres-auto.jpg';
import '../styles/Produits.css';
import { useState } from 'react';

function Produits() {
    const [sommaireOpen, setSommaireOpen] = useState(false);

    return (
        <div className="produit-titre">
            <button
                className="sommaire-toggle"
                onClick={() => setSommaireOpen(!sommaireOpen)}
                aria-label="Ouvrir le sommaire"
            >
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className={`sommaire-fixed${sommaireOpen ? ' open' : ''}`}>
                <ul>
                    <li><a href="#filtration">Filtration de piscine</a></li>
                    <li><a href="#Traitement">Traitement automatique de l'eau</a></li>
                    <li><a href="#chauffage">Chauffage de piscine</a></li>
                    <li><a href="#entretien">Entretien de la piscine</a></li>
                    <li><a href="#produits-traitement">Produits de traitement de l'eau</a></li>
                    <li><a href="#desinfection">Désinfection au chlore</a></li>
                    <li><a href="#equilibre">Équilibre de l'eau</a></li>
                    <li><a href="#prevention">Prévention et solutions</a></li>
                    <li><a href="#sel">Sel pour électrolyseur</a></li>
                    <li><a href="#accessoires">Accessoires</a></li>
                    <li><a href="#volet">Volets de piscine</a></li>
                    <li><a href="#baches">Bâches</a></li>
                </ul>
            </div>
            <div className="produit-content">
            <h2 id="filtration">Filtration de piscine</h2>
            <div className="Filtre">
                <div className='filtre-cartouche'>
                    <h3>Filtre à cartouche </h3>
                    <img src={Filtre1} alt="Filtre à cartouche" />
                    <p>Ce type de filtration avec cartouche est le filtre en adéquation avec les tendances du marché qui se veut plus éco-responsable. 
                    En effet, vous n'avez pas à réaliser de contre lavage ce qui reduit votre consommation en eau : 10 à 20 L contre 300 L avec un filtre classique.
                    </p>
                </div>
                <div className='filtre-charge-filtrante'>
                    <h3>Filtre à charge filtrante</h3>
                    <img src={Filtre2} alt="Filtre à charge filtrante" />
                    <p>Ce type de filtration avec un filtre à charge filtrante est le type de filtration le plus répendu. 
                    La filtration de l'eau est assurée à travers une charge filtrante, composée d'un mélange de sable et de gravier ou de verre filtrant.
                    </p>
                </div>
            </div>
            <div className="Pompe">
                <div className='pompe-filtration'>
                    <h3>Pompe de filtration</h3>
                    <img src={Pompe1} alt="Pompe de filtration" />
                    <p>La pompe de filtration est un élément essentiel pour assurer la circulation de l'eau dans votre piscine,
                    de plus nos pompes de filtration sont sélectionnées pour leur efficacité et leur solidité.
                    </p>
                </div>
                <div className='pompe-filtration-econome'>
                    <h3>Pompe de filtration économe</h3>
                    <img src={Pompe2} alt="Pompe de filtration économe" />
                    <p>4 points à noter sur les atouts des pompes à vitesse variable : <br/>
                    1. L'eau passant plus doucement dans le système de filtration, les particules sont piégées plus efficacement.<br/>
                    2. Offrant un confort acoustique incomparable.<br/>
                    3. Autorise une filtration 24h/24, ce qui rend le traitement et le chauffage plus homogènes.<br/>
                    4. Optimisation de la puissance au besoin. En diminuant de quelques m3/h, on observe une consommation d'électricité divisée par 3.</p>
                </div>
                <div className='suppresseur'>
                    <h3>Suppresseur</h3>
                    <img src={Suppresseur1} alt="Suppresseur" />
                    <p>Spécialement conçus pour les robots nettoyeurs automatiques, les surpresseurs sont programmables et d'une grande efficacité pour faire circuler l'eau sous pression.</p>
                </div>
            </div>
            </div>
            <div className='Titre-Traitement'>
                <h2 id="Traitement">Traitement automatique de l'eau</h2>
            </div>
            <div className="Traitement-produit">
                <div className='Electrolyseur-titre'>
                <div className='Electrolyseur'>
                    <div className='Electrolyseur-photo'>
                    <img src={Electrolyseur1} alt="Électrolyseur au sel" />
                    <img src={Electrolyseur2} alt="Électrolyseur au sel" />
                    <h2>Électrolyseur au sel</h2>
                </div>
                    <p>3 raisons d'opter pour une piscine avec électrolyseur au sel<br></br>
                        1. L'entretien du bassin est plus facile car le réapprovisionnement en sel est bien moins fréquent qu'avec les galets désinfectants, apport en sel 1 fois par an contre 25 à 30 fois d'apport en galet par an.<br></br>
                        2. Le sel est naturel, si bien qu'il n'a pas les inconvénients des produits chimiques, comme le chlore par exemple, sur la santé des baigneurs. Il présente moins de risque d'irritations ou d'allergies pour les yeux et la peau. Il est egalement inodore.<br></br>
                        3. Là encore, le caractère naturel du sel en fait un traitement écologique. Il ne pollue pas l'environement, en cas de vidange du bassin.
                        Nous proposons plusieurs électrolyseurs, connectées à votre smartphone ou non nous choisirons avec vous l'équipement le mieux adapté à vos besoins et les besoins de votre bassin.</p>
                </div>
                </div>
                <div className='Pompe-doseuse-titre'>
                <div className='Pompe-doseuse'>
                    <div className='Pompe-doseuse-photo'>
                    <img src={Pompedoseuse1} alt="Pompe doseuse de pH liquide" />
                    <img src={Pompedoseuse2} alt="Pompe doseuse de pH liquide" />
                    <h2>Pompe doseuse de pH liquide</h2>
                </div>
                    <p>Une pompe doseuse de pH liquide vous assure un maintient automatique du niveau de pH de l'eau de votre piscine. Un confort et une sérénité notable.<br></br>
                        Nous proposons plusieurs pompes doseuse, connectées à votre smartphone ou non nous choisirons avec vous l'équipement le mieux adapté à vos besoins et les besoins de votre bassin.</p>
                </div>
                </div>
            </div>
            <div className='Chauffage'>
                <div className='Chauffage-titre'>
                    <h2 id="chauffage">Chauffage de piscine</h2>
                </div>
            <div className='Pompes-chaleur'>
                <div className='Pompes-chaleur-performantes'>
                    <img src={Chauffage1} alt="Chauffage de piscine" />
                    <h2>Pompes à chaleur performantes</h2>
                    <p>Notre gamme de pompes à chaleur Polytropic vous offrira un ensemble de garanties sur lesquelles vous pouvez compter, alliant qualité, performance et fiabilité :<br />
                    - Une expertise de 20 ans et une fiabilité du matériel reconnue dans la profession.<br />
                    - Une ligne téléphonique dédiée à votre écoute : un interlocuteur Polytropic disponible pour répondre à toutes vos questions.<br />
                    - Une équipe de professionnels formée en continu et spécialement dédiée au service après-vente et aux interventions sur site.<br />
                    - L'adhésion à la F.P.P. (Fédération des Professionnels de la Piscine) et la participation à l'élaboration des recommandations techniques et des bonnes pratiques de la profession.<br />
                    - Une certification du matériel par un laboratoire extérieur indépendant pour une mise en conformité avec les normes européennes en matière de niveaux sonores, de puissances et de consommations.<br />
                    - Des tests continus en interne sur des bancs d'essai.<br />
                    - Des durées de garantie exclusives de 3 ou 5 ans.<br />
                    - Un engagement dans une démarche écoresponsable veillant à l'impact de notre production mais aussi à l'utilisation de nos produits.</p>
                </div>
                <div className='Pompes-chaleur-efficaces'>
                    <img src={Chauffage2} alt="Chauffage de piscine" />
                    <h2>Pompes à chaleur efficaces</h2>
                    <p>Notre gamme de pompes à chaleur Valimport allie simplicité, robustesse et efficacité.<br />
                    - Elles sont parmi les premières actrices sur le marché des pompes à chaleur pour piscines.<br />
                    - Nous proposons une large gamme de 13 modèles différents.<br />
                    - Nous offrons un service après-vente très efficace.<br />
                    - Nous fournissons une assistance pour le bilan thermique.<br />
                    - Les pièces détachées sont facilement obtenables.</p>
                    <div className="bulles-conseil">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <p>Il est fortement recommandé d'installer une couverture à bulles sur votre piscine
                        lors de l'installation d'une pompe à chaleur.<br />
                        <strong>Environ 50% d'énergie économisée avec une couverture à bulles</strong></p>
                    </div>
                </div>
            </div>
            <div className='Entretien-titre'>
                <h1 id='entretien'>Comment bien entretenir sa piscine !</h1>
                <p>Du fait de la pollution apportée par les baigneurs et l'air, la piscine devient le lieu de développement de micro-organismes (bactéries, champignons, algues).<br/>
                 Il est donc indispensable d'assurer une hygiène irréprochable de l'eau du bassin grâce à un traitement régulier et efficace.<br/>
                  Une large gamme complète de produits de traitement de l'eau, fortement concentrés et conformes aux normes piscine, vous est proposée. <br/>
                  Des nettoyeurs automatiques pour un nettoyage impeccable de votre bassin et un choix d'accessoires de nettoyage manuel adaptés à chacun sont également disponibles.</p>
                <div className='Nettoyage-automatique'>
                    <h2 id='Nettoyage-auto'>Nettoyage automatique de piscine</h2>
                    <div className='Nettoyeur-robot'>
                        <div className='Robot-nettoyeur-row'>
                            <div className='Robot-nettoyeur-fil'>
                                <h3>Robots nettoyeurs</h3>
                                <div className='Robot-nettoyeur-fil-images'>
                                    <img src={Robot1} alt="Robot nettoyeur" />
                                    <img src={Robot2} alt="Robot nettoyeur" />
                                </div>
                                <p>Les robots nettoyeurs sont le meilleur allié pour l'entretien régulier de votre piscine. <br/>
                                    Ils sont conçus pour vous permettre de profiter simplement de votre piscine en vous donnant plus de temps.<br/>
                                    Ici, vous trouverez les deux gammes les plus vendues sur le marché de la piscine, et surtout les plus performantes et de qualité.<br/><br/>
                                    Pour les petits ou grands bassins : Ne vous laissez pas tromper par sa taille. Le Maytronics Dolphin possède un design compact qui offre des performances notables.
                                    </p>
                            </div>
                            <div className='Robot-nettoyeur-sans-fil'>
                                <h3>Robots nettoyeurs sans fil</h3>
                                <img src={Robot3} alt="Robot nettoyeur sans fil" />
                                <p>Grâce à son mode Éco, l'entretien de votre piscine devient extrêmement simple. L'expérience sans fil ajoute du confort d'utilisation, vous permettant de contrôler le nettoyage de votre piscine avec une grande aisance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Produits-traitement'>
                <h2 id="produits-traitement">Produits de traitement de l'eau</h2>
                <div className='Infos-traitement'>
                    <div className='Traitement-infos'>
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <p>
                        Pour rappel : Le traitement de l'eau de votre piscine représente 20% de sa clarté.<br/> 
                        Un système de filtration performant (représentant environ 80% <br/> 
                        de la clarté de votre piscine) est donc primordial pour que les produits agissent efficacement.
                        </p>
                    </div>
                    <div className='Age-de-leau'>
                        <img src={Agedeleau} alt="Age de l'eau" />
                        <p>Azuly Piscine prend également le soin de choisir des produits d'entretien haut de gamme et adaptés pour vos piscines et votre confort. <br/>
                        Présente depuis plus de 70 ans aux côtés des piscinistes, des collectivités et des réseaux de distribution du marché des piscines,<br/>
                        Gaches Chimie propose une gamme complète de produits pour l'eau, unique et fabriquée en France.</p>
                    </div>
                </div>
            </div>
            <div className='Desinfection-chlore'>
                <h2 id="desinfection">Désinfection au chlore</h2>
                <div className='Chlore-lent'>
                        <img src={ChloreLent} alt="Chlore lent" />
                        <img src={ChloreLent2} alt="Chlore lent" />
                </div>
            </div>
        </div>
        <div className='Equilibre-eau'>
            <h2 id="equilibre">Équilibre de l'eau</h2>
                <div className='Equilibre-eau-images'>
                    <div className='ph-img1'>
                        <img className='ph1-img' src={ph1} alt="pH 1" />
                        <img className='ph3-img'src={ph3} alt="pH 3" />
                    </div>
                    <div className='ph-img2'>
                        <img className='ph2-img'src={ph2} alt="pH 2" />
                        <img className='ph4-img'src={ph4} alt="pH 4" />
                        <div className='Equilibre-eau-infos'>
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <p>Pour rappel : Le traitement de l'eau de votre piscine représente 20% de sa clarté.<br/> 
                            Un système de filtration performant (représentant environ 80% de la clarté de<br/> 
                            votre piscine) est donc primordial pour que les produits agissent efficacement.</p>
                        </div>
                    </div>
                </div>
            </div>   
            <div className='Prévention-solution'>
                <h2 id="prevention">Prévention et solutions</h2>
                <div className='prevention-img'>
                    <img src={Algicide} alt="Algicide" />
                    <img src={Gel} alt="Gel nettoyant" />
                </div>
            </div>
            <div className='Sel'>
                <h2 id="sel">Sel pour électrolyseur</h2>
                <div className='Sel-img'>
                    <img src={Sel} alt="Sel pour électrolyseur" />
                </div>
            </div>
            <div className='Accessoires'>
                <h2 id="accessoires">Accessoires</h2>
                <div className='Accessoires-img'>
                    <img className='Balai' src={Balai} alt="Balai" />
                    <img className='Brosses' src={Brosses} alt="Brosses" />
                    <img className='Thermometre' src={Thermometre} alt="Thermomètre" />
                    <img className='Epuisettes' src={Epuisettes} alt="Épuisettes" />
                </div>
            </div>
            <div className='Volet'>
                <h2 id="volet">Volets de piscine</h2>
                <p>Une couverture de piscine automatique est conforme à la norme NF P 90-308 et à la loi sécurité Piscine, qui impose une solution de sécurité normalisée pour toute piscine à usage individuel ou collectif (enterrée et non close).<br/>
                Ce type de couverture protège votre bassin des détritus et des saletés, contribuant ainsi à réduire la nécessité de produits de traitement. De plus, elle améliore l'isolation thermique de l'eau et minimise l’évaporation.</p>
                <div className='Volet-row'>
                    <div className='Volet-col'>
                        <img className='Volet-hors-sol' src={Volet} alt="Volet hors sol" />
                        <h3>Volet hors sol</h3>
                        <p>Au-delà de garantir la sécurité et de faciliter l'entretien, les couvertures automatiques hors-sol se caractérisent par leur simplicité d'utilisation et leur facilité d'installation.<br/>
                        Elles se révèlent particulièrement adaptées pour la rénovation ou l'amélioration d'une piscine existante dépourvue de couverture.</p>
                    </div>
                    <div className='Volet-col'>
                        <img className='Volet-immerge' src={Volet2} alt="Volet immergé" />
                        <h3>Volet immergé</h3>
                        <p>Les couvertures automatiques immergées se présentent comme des solutions haut de gamme qui allient sécurité, économies de traitement, économies d'eau et d'énergie,<br/> 
                        réduction des coûts d'entretien du bassin et des lames du volet, mettant surtout l'accent sur un design esthétique.</p>
                    </div>
                </div>
            </div>
            <div className='Bâches'>
                <h2 id="baches">Bâches</h2>
                <p>Il existe plusieurs types de couvertures, communément appelées « bâches », pour protéger et sécuriser votre bassin.
                Nous en proposons trois : les couvertures à barres de sécurité, les couvertures d'été plus communément
                appelées « bâches à bulles », et les couvertures automatiques.</p>
                <div className='Bache-row'>
                    <div className='Bache-1'>
                        <img className='Bache1' src={Bache1} alt="Couverture à barres" />
                        <h3>Couverture à barres</h3>
                        <p>La couverture à barres représente le système le plus efficace sur le marché des piscines pour protéger votre bassin contre les saletés et impuretés pendant l'hiver. Principalement utilisée durant cette période, cette solution offre une protection intégrale grâce à son revêtement opaque. Elle est conforme à la norme NF P 90-308 et aux lois en matière de sécurité des piscines.
                        Il est possible d’utiliser la couverture facilement pendant la saison estivale grâce à l'iScoot, une solution intermédiaire à petit budget qui vise à faciliter l'enroulement de votre couverture à barres.</p>            
                    </div>
                    <div className='Bache-2'>
                        <img className='Bache2' src={Bache2} alt="Couverture à bulles" />
                        <h3>Couverture à bulles</h3>
                        <p>La couverture à bulles, également appelée bâche à bulles, est une couverture isotherme conçue spécifiquement pour être utilisée en été afin de préserver la température de l'eau de la piscine. Elle joue un rôle essentiel en limitant l'évaporation de l'eau et en préservant la chaleur de l'eau. Elle est fortement recommandée comme alliée à une pompe à chaleur.</p>
                    </div>
                    <div className='Bache-3'>
                        <img className='Bache3' src={Bache3} alt="Couverture à barres automatique" />
                        <h3>Couverture à barres automatique</h3>
                        <p>Eden, la couverture motorisée et connectée pour votre piscine.<br/>
                        Cette couverture offre tous les avantages d'une couverture à barres classique et bien plus encore :<br/>
                        - Utilisable toute l'année<br/>
                        - Motorisée<br/>
                        - Autonome<br/>
                        - Connectée<br/>
                        - Installation simplifiée<br/>
                        - Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produits;