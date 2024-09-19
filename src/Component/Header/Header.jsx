import './Header.modules.css'

function Header() {
    return ( 
        <>
         <div className="container">
        <div className="profile">
            <img src="your-profile-image.png" alt="Profile Picture"/>
            <h1>Im Kevin</h1>
        </div>
        <div className="title">
            <h2>SENIOR</h2>
            <h2>FREELANCE</h2>
            <h2>DESIGNER</h2>
        </div>
        <div className="footer">
            <p>Over the last 12 years, I have empowered 25+ companies</p>
        </div>
    </div>
        </>
     );
}

export default Header;