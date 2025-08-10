import GalerieJardin from "../composants/Galerie-jardin";
import Header_jardin from "../composants/Header_jardin";
import Jardin from "../composants/Jardin";
import Footer_jardin from "../composants/Footer_jardin";
import '../styles/Page_jardin.css';

function Page_jardin() {
    return (
        <div className="Page_jardin">
            <Header_jardin />
            <GalerieJardin/>
            <Jardin />
            <Footer_jardin />
        </div>
    );
}

export default Page_jardin;