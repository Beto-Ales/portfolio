import React from 'react'

const Footer = () => {
  return (
    <div className='footerContainer footer'>
        <h3>CONTACT</h3>        
        <ul>
            <li><i className="fas fa-map-marker-alt"> Rømersgade 23, 5 th. 1362 København.</i></li>
            <li><i className="far fa-envelope"> betoalesandroni@gmail.com</i></li>
            <li><i className="fas fa-phone"> +45 71 35 62 20</i></li>
            <li><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/alberto-alesandroni/"target="_blank">Linkedin</a></li>
            <li><i className="fab fa-github"></i> <a href="https://github.com/Beto-Ales"target="_blank">GitHub</a></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Footer