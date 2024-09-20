import './Header.modules.css'

function Header() {
    return ( 
        <>
         <div className="container">
            <div className="header">
        <div className="profile">
        <h1>Im Abbas Raza</h1>
            <img src="Img/image 6344214.png" alt="Profile Picture" className='profile-Img'/>
            
        </div>
        <div className="title">
            <h2>SENIOR <br/> FREELANCE <br/>DESIGNER</h2>

        </div>
        <div className="bottom">
            <p>Over the last 12 years, I have empowered 25+ companies</p>

        </div>
        </div>
    </div>
        </>
     );
}

export default Header;