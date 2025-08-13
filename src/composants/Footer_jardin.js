import '../styles/Footer.css';

function Footerjardin() {
  return (
    <footer className="footer_jardin">
        <a href='https://www.facebook.com/ChaintrierPierre?locale=fr_FR' target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
          <h2>@Azuly piscine </h2>
          </a>
        <a
          href="https://www.instagram.com/azuly_piscine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
          <h2>@Azuly_piscine</h2>
        </a>
        <a href='https://www.tiktok.com/@azuly_piscine' target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-tiktok"></i>
          <h2>@Azuly_piscine</h2>
        </a>
          <a href='https://www.google.com/maps/place/Azuly+Piscine/@45.4084461,-0.1016697,9z/data=!4m6!3m5!1s0x48000928822f3d5f:0xb2fc792a3363adac!8m2!3d45.4710872!4d-0.0572207!16s%2Fg%2F11pkd877kr?entry=ttu' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-google-plus"></i>
          </a>
    </footer>
  );
}

export default Footerjardin;