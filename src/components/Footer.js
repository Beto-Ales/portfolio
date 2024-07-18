import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container footer'>
        <h3>CONTACT</h3>        
        <ul>
            <li>
              <i className="fas fa-map-marker-alt"> 
                <a href="https://www.google.com/maps?q=Rømersgade 23, 1362 København" target="_blank" rel="noreferrer"> Rømersgade 23. 1362 København. </a> </i>
              </li>
            <li>
              <i className="far fa-envelope"> 
                <a href="mailto:betoalesandroni@gmail.com" target="_blank" rel="noreferrer"> betoalesandroni@gmail.com </a> </i>
              </li>
            <li>
              <i className="fas fa-phone"> <i className="fab fa-whatsapp"></i> 
              <a href="https://wa.me/4571356220" target="_blank" rel="noreferrer"> +45 71 35 62 20 </a> </i>
              </li>
            <li>
              <i className="fab fa-linkedin"></i> 
              <a href="https://www.linkedin.com/in/alberto-alesandroni/" target="_blank" rel="noreferrer">Linkedin</a>
              </li>
            <li>
              <i className="fab fa-github"></i> 
              <a href="https://github.com/Beto-Ales"target="_blank" rel="noreferrer">GitHub</a>
              </li>
        </ul>
    </div>
  )
}

export default Footer