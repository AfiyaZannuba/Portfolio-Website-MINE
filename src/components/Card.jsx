import React from 'react'
import '../Card.css';
import reactportfolio from '../images/reactportfolio.png'
import restaurant from '../images/southindia.PNG'
import landingpage from '../images/LandingPage.PNG'
import htmlwebsite from '../images/htmlwebsite.png'
import caranimation from '../images/carAnimation.png'
import calculator from '../images/calculator.png'
import tindog from '../images/tindog.png'

import subjectgrading from '../images/SubjectGrade.PNG'
import accountregistration from '../images/AccountRegistration.png'
import ecommerce from '../images/ECommerce.PNG'

const Card = () => {
    const card = [
        {
          id: 1,
          title: "React Portfolio",
          src: reactportfolio,
          Demo: "https://afiya-portfolio-website-react.netlify.app/",
          Code: "https://github.com/AfiyaZannuba/react-portfolio-afiya"
        },
        {
          id: 2,
          title: "Restaurant Website",
          src: restaurant,
          Demo: "https://south-india-eats.netlify.app/",
          Code: "https://github.com/AfiyaZannuba/front-end-project"
        },
        {
          id: 3,
          title: "Landing Page",
          src: landingpage,
          Demo: "https://intenshalalandingpagebyafiya.netlify.app/",
          Code: "https://github.com/AfiyaZannuba/Afiya-Internshala-Project"
        },
        {
          id: 4,
          title: "Portfolio Website",
          src: htmlwebsite,
          Demo: "https://afiya-portfolio-website.netlify.app/",
          Code: "https://github.com/AfiyaZannuba/Afiya-Portfolio-Website"
        },
        {
          id: 5,
          title: "Car Animation",
          src: caranimation,
          Demo: "https://car-animation-byafiya.netlify.app/",
          Code: "https://github.com/AfiyaZannuba/car-animation"
        },
        {
          id: 6,
          title: "Calculator App",
          src: calculator,
          Demo: "https://calculator-app-afiyaa.netlify.app/",
          Code: "https://github.com/AfiyaZannuba/Calculator-App"
        },
        {
          id: 7,
          title: "Tindog Website",
          src: tindog,
          Demo: "https://afiya-tindog-project.netlify.app",
          Code: "https://github.com/AfiyaZannuba/bootstrap-tindog"
        },
        {
          id: 8,
          title: "Selenium Automation",
          src: subjectgrading,
          Code: "https://github.com/AfiyaZannuba/Subject-Grading"
        },
        {
          id: 9,
          title: "Selenium Automation",
          src: accountregistration,
          Code: "https://github.com/AfiyaZannuba/Testing-Registration-Form"
        },
        {
          id: 10,
          title: "Selenium Automation",
          src: ecommerce,
          
          Code: "https://github.com/AfiyaZannuba/E-Commerce-Project"
        },
    
      ]
    return (
      <>
      <div className="row-card">
      <h2 className='card-title'>Portfolio &nbsp; Projects</h2>
      
      {card.map((item) => (
          <>
      
          
              <div key={item.id} className="container-card">
      
                  <div className="card-card">
                      <img src={item.src} alt="" />
                      <p>{item.title}</p>
                      <div className='btn-card'>
                        <div><button><a href={item.Demo}>Demo</a></button></div>
                        <div><button><a href={item.Code}>Code</a></button></div>
                      </div>
                  </div>
                  {/* <div class="card-skills second">
                      <img src={item.src} alt="" />
                  </div> */}
      
              </div>
          </>
                ))}

            </div>

        </>
    )
}

export default Card