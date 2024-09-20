import './Services.modules.css'

function Services() {
    return ( 
        <>
        <div className="container">
        <header className="Servicesheader">
            <h1>SERVICES</h1>
            <div className="tags">
                <span className="tag">Design System</span>
                <span className="tag">Product</span>
                <span className="tag">Website</span>
                <span className="tag">Branding</span>
                <span className="tag">Logo Design</span>
            </div>
            <p className="introPara">Product, Website or Brand Design, Ive got you covered!</p>
            <p className='introParaLight'> Lets elevate your vision and achieve your design goals together!</p>
        </header>

        <div className="services">
            <div className="service-card">
                <img src="src/assets/Services icons (1).png" alt="" className='servicesLogo' />
             
                <h3>Design System Expert</h3>
                <p>Creation / Edition or Audit of your DS</p>
            </div>
            <div className="service-card">
            <img src="src/assets/Services icons (2).png" alt="" className='servicesLogo' />
                <h3>UX & UI Design</h3>
                <p>Creation / Edition or Audit of your DS</p>
            </div>
            <div className="service-card">
            <img src="src/assets/Services icons (3).png" alt="" className='servicesLogo' />
                <h3>Brand Design</h3>
                <p>Creation / Edition or Audit of your DS</p>
            </div>
            <div className="service-card">
            <img src="src/assets/Services icons.png" alt="" className='servicesLogo' />
                <h3>Logo Design</h3>
                <p>Creation / Edition or Audit of your DS</p>
            </div>
        </div>

        <footer className="footer">
            <div className="icons">
          <img src="src/assets/Apps (1).png" alt="" />
          <img src="src/assets/Apps (2).png" alt="" />
          <img src="src/assets/Apps (3).png" alt="" />
          <img src="src/assets/Apps (4).png" alt="" />
          <img src="src/assets/Apps.png" alt="" />
          <img src="src/assets/Apps (6).png" alt="" />
            </div>
        </footer>
    </div>
        </>
     );
}

export default Services;


