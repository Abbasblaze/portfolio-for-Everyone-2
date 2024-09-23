import './Contact.modules.css'

function Contact() {
    return ( 
        <>
        <div className="container">
        <div className="Servicesheader">
        <h1>Contact</h1>
        </div>

        <div className="contactCard">
        <div className="profiles">
            <img src="src/assets/image 6344214.png" alt="Profile Picture"/>
            <div className="status">
                <span></span>
                Available for work
            </div>
        </div>
        <div className="content">
     
            <h2>Drop me a line or say 👋 on social networks</h2>
            <p>Whether youre a design team in need of support or an early-stage company looking to <br/>level up your design, Id love to talk about your project 💜</p>
           
        </div>
        <div className="social-icons">
              <img src="src/assets/Component 99.png" alt="" />
              <img src="src/assets/Component 100.png" alt="" />
              <img src="src/assets/Component 101.png" alt="" />
              <button className="btn">Lets create magic together ✨</button>
            </div>
      
    </div>
        </div>
        </>
     );
}

export default Contact;