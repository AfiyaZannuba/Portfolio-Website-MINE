import React from 'react'
import '../home.css'
import heroine from '../images/heroImage.png-removebg.jpg'
import { FiDownload } from 'react-icons/fi';

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="column">
                    <div className="section">
                        <h2>
                            I'm <span>A &nbsp; MERN &nbsp; Stack &nbsp; <br /> Developer</span>
                        </h2>
                        <p>I love to work on web applications using technologies
                            like React.js, Tailwind, Express.js, MongoDB and Mongoose.
                            I'm looking forward to join a workspace to utilise and develop my skills.
                        </p>
                       <button className='resume'><a className="title" href="https://drive.google.com/file/d/1BTtOi5en7aEhgzznBDkbEtU85G8ZnSIJ/view?usp=sharing">Resume <FiDownload /></a></button>

                    </div>
                </div>
                <div className="column">
                    <div className="section">
                        <img className="slide" src={heroine} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home