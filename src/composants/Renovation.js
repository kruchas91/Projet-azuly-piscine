import '../styles/Renovation.css';
import Avant from '../assets/avant.jpg';
import Apres from '../assets/apres.jpg';
import Renovation1 from '../assets/Renovation_1.jpg';
import Renovation2 from '../assets/Renovation_2.jpg';
// import Depannage1 from '../assets/dépannage1.jpg';
// import Depannage2 from '../assets/dépannage2.jpg';
import Entretien from '../assets/Entretien1.jpg';
import Entretien2 from '../assets/Entretien2.jpg';
import Entretien3 from '../assets/Entretien3.jpg';

function Renovation() {
    return (
        <div className="renovation-content">
            <div className='renovation-header'>
            <h1>Nos prestations</h1>
            <h2>Rénovation du bassin de votre piscine ? </h2>
            <p>Vous souhaitez donner un petit coup de jeune à votre piscine ? </p>
            <p>Nous vous proposons un service de rénovation de piscine pour redonner vie à votre bassin.</p>
            </div>
            <div className="renovation-images">
                <img src={Avant} alt="Avant la rénovation" className="renovation-image" />
                <img src={Apres} alt="Après la rénovation" className="renovation-image" />
            </div>
            <div className="renovation-row">
                <img src={Renovation1} alt="Rénovation 1" className="renovation-image" />
                <img src={Renovation2} alt="Rénovation 2" className="renovation-image" />
            </div>
            <p className='liner-info'>Votre liner est taché ? Cassant dans les angles ? Il est rugueux au toucher ? Il est sûrement temps de le changer. On estime sa durée de vie entre 10 et 15 ans. <br></br>
            Faites confiance à Azuly Piscine pour changer votre liner en seulement quelques jours. Des liners APF, Albon ou encore Astral, de la couleur ou motifs de votre choix.</p>
            <div className='depannage'>
                <h2>Dépannage de piscine dans le secteur de : <br></br>Saintes, Angoulême, Périgueux</h2>
                <p>Avant chaque dépannage, une visite chez vous et un diagnostic est nécessaire. Nous tenons à vous proposer la meilleure des prestations possible, et cela passe aussi par une exécution organisée et efficace.</p>
                <div className='depannage-info'>
                    <div className='depannagesection1'>
                        {/* <img src={Depannage1} alt="Dépannage de piscine" className="depannage-image" /> */}
                        <p>Azuly Piscine est à votre disposition pour la réparation de tous vos appareils, pompes, filtrations, tout appareil de régulation d'équilibre ou de traitement de votre piscine.</p>
                    </div>
                    <div className='depannagesection2'>
                        {/* <img src={Depannage2} alt="Dépannage de piscine" className="depannage-image" /> */}
                        <p>Nous sommes capables, dans la limite du possible, de faire de plus grosse réparation : réfection de réseau hydraulique autour du bassin, changement de skimmer, etc.</p>
                    </div>
                </div>
            </div>
            <div className='remise-en-route'>
                <h3>Remise en route de votre piscine</h3>
                <p>AZULY Piscine vous propose de remettre en route votre piscine. Explication du fonctionnement si besoin,
                contrôle de la piscine et de tous ses appareils, mis en route des appareils de régulations, contrôle de l'état du filtre 
                (changement de charge filtrante tous les 4 ans) et nettoyage du bassin complet. 
                Bien sûr si vous avez besoin également de produits, nos fournisseurs saurons nous aider à satisfaire vos besoins avec leurs meilleures marques.
                </p>
                <p> Un exemple de nos services en 3 étapes !</p>
                <div className="remise-images">
                    <div className="entretien1">
                        <img src={Entretien} alt="Entretien de piscine" className="remise-img left" />
                        <p>Examination de l'état de la piscine ainsi que des besoins :</p>
                    </div>
                    <div className="entretien2">
                        <img src={Entretien2} alt="Entretien de piscine" className="remise-img right" />
                        <p>Application des solutions étudiés au préalable :</p>
                    </div>
                    <div className="entretien3">
                        <img src={Entretien3} alt="Entretien de piscine" className="remise-img left" />
                        <p>Place à la baignade ! </p>
                    </div>
                </div>
            </div>
            <div className='Hivernage'>
                <h2>Hivernage de votre piscine</h2>
                <p>Azuly Piscine vous propose de préparer votre piscine pour l'hiver. Nous vous proposons un service d'hivernage complet pour protéger votre piscine des intempéries hivernales.</p>
                <p>Hivernage passif ou actif, c'est au choix mais nous vous recommanderons toujours un hivernage actif.
                Produit d'hivernage, de traitement choc ou encore des couvertures à barre, filtrante ou opaque, AZULY Piscine saura répondre à votre demande et vous conseiller au mieux.</p>
            </div>
            <div className='entretien-footer'>
                <h2>Entretien de votre piscine</h2>
                <p>Qu'en est-il des entretiens hebdomadaires ? Mensuels ? Ou encore Semestriels ? N'hésitez pas à&nbsp;<a href="/contact" target="_blank" rel="noopener noreferrer"> nous contacter</a> &nbsp;pour plus de renseignements.</p>
            </div>
        </div>
    );
}

export default Renovation;