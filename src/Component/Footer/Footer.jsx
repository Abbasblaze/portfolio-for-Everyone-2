import './Footer.modules.css'

function Footer() {
    return ( 
        <>
         <div className="container">
            <div className="footerContainer">
        <div className="footerLogo">
        <img src="src/assets/Made with framer.png" alt="" />
        </div>

        <div className="footer">
            <p>Cooked with love in 🇺🇸  <span className="icon"><img src="src/assets/image 295.png" alt="" /></span> with<span className="icon"><img src="src/assets/framer_logo_icon_169149 1.png" alt="" /></span></p>
           
        </div>
        <p className="footer-text">©kcstudio 2023</p>
    </div>
    </div>
        </>
     );
}

export default Footer;