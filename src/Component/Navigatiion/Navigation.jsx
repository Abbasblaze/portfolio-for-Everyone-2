import './Naviagtion.modules.css'

function Naviagtion() {
    return ( 
        <>
        <div className="container"> 
          <div className="navbar">
        <div className="navbar-Right">
      <img src="src/assets/Union.png" alt="" className='NavLogo'/>
      <img src="src/assets/Component 99.png" alt="" className='socials' />
      <img src="src/assets/Component 100.png" alt="" className='socials'/>
      <img src="src/assets/Component 101.png" alt="" className='socials'/>
       </div>

        <div className="navbar-left">
        <a href="#" className="">Works</a>
        <a href="#" className="">Experiences</a>
        <a href="#" className="">Services</a>
        <a href="#" className="nav-button">contact@kc.studio</a>
       </div>
       </div>
        </div>
        </>
     );
}

export default Naviagtion;