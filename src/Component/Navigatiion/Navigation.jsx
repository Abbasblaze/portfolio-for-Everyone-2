import './Naviagtion.modules.css'

function Naviagtion() {
    return ( 
        <>
        <div className="container"> 
          <div className="navbar">
        <div className="navbar-Right">
      <img src="Img/Union.png" alt="" className='NavLogo'/>
      <img src="Img/Component 100.png" alt="" className='socials' />
      <img src="Img/Component 101.png" alt="" className='socials'/>
      <img src="Img/Component 99.png" alt="" className='socials'/>
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