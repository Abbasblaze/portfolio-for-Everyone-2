import './Experience.modules.css'

function Experience() {
    return (
        <>
        <div className="Experience">
      <h1 className='color'>12+ YEARS XP</h1>
      <h2>From Saas to Website & Mobile</h2>
    <p>I’ve had the opportunity to work across all kinds of product</p>

    <div className="timeline-container">
        <div className="timeline-card">
            <div className="year-range">2012 - 2014</div>
            <div className="company-logo"><img src="Img/Ellipse 329 (1).png" alt="Sushio"/></div>
            <div className="role">Product Designer</div>
            <div className="company">@Sushio</div>
            <div className="country"></div>
        </div>
        <div className="timeline-card">
            <div className="year-range">2014 - 2017</div>
            <div className="company-logo"><img src="Img/Ellipse 329.png" alt="KCstudio"/></div>
            <div className="role">Freelance</div>
            <div className="company">@KCstudio</div>
            <div className="country"></div>
        </div>
        <div className="timeline-card">
            <div className="year-range">2017 - 2019</div>
            <div className="company-logo"><img src="Img/logo2.png" alt="Pukka.io"/></div>
            <div className="role">Co-founder</div>
            <div className="company">@Pukka.io</div>
            <div className="country"></div>
        </div>
        <div className="timeline-card">
            <div className="year-range">2020 - 2022</div>
            <div className="company-logo"><img src="Img/logo5.png" alt="Strapi"/></div>
            <div className="role">Lead Designer</div>
            <div className="company">@Strapi</div>
            <div className="country"></div>
        </div>
        <div className="timeline-card">
            <div className="year-range">2022 - 2024</div>
            <div className="company-logo"><img src="Img/logo6.png" alt="KCstudio"/></div>
            <div className="role">Senior Freelance</div>
            <div className="company">@KCstudio</div>
            <div className="country"></div>
        </div>
    </div>
        </div>
        </>
     );
}

export default Experience;