import React from 'react'
import '../skills.css';
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/javascript.png'
import reactjs from '../images/react.png'
import tailwindcss from '../images/tailwind.png'
import bootstrap from '../images/bootstrap.png'
import nextjs from '../images/nextjs.png'
import nodejs from '../images/node.png'
import java from '../images/java.png'
import github from '../images/github.png'
import python from '../images/python.png'
import jquery from '../images/jquery.png'


const Skills = () => {
    const card = [
        {
          id: 1,
          src:html,
          
        },
        {
          id: 2,
          src: css,
          
        },
        {
          id: 3,
          src: js,
        
        },
        {
          id: 4,
          src: reactjs,
         
        },
        {
          id: 5,
          src: tailwindcss,
        },
        {
          id: 6,
          src: bootstrap,
        },
        {
            id: 7,
            src: nextjs
        },
        {
            id: 8,
            src: nodejs
        },
        {
            id: 9,
            src: github
        },
        {
            id: 10,
            src: java
        },
        {
            id: 11,
            src: python
        },
        {
            id: 12,
            src: jquery
        }
    
      ]
  return (
    <>
<div className="row-skills">
<h2 className='skills-title'>Skills</h2>

{card.map((item) => (
    <>

    
        <div key={item.id} className="container-skills">

            <div className="card-skills">
                <img src={item.src} alt="" />
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

export default Skills