import React from 'react'

const SectionF = () => {
  return (
    <div className='f'>
        <div className="professional-experience">
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <h4>FRONTEND DEVELOPER</h4>
            <h5>SAH</h5>
            <p>Rosario, Santa Fe, Argentina.</p>
            <p>February 2023 - Present.</p>
            
            <p>Develop and maintain web applications for managing various aspects of hospital operations.<br/>
            Build and integrate modules for doctors, managers, workers, and patients.<br/>
            Implement negotiation handling between hospitals and health insurance companies.<br/>
            Collaborate with cross-functional teams to design, develop, and deploy new features.<br/>
            Optimize application performance and enhance user experience.<br/>
            Technologies: Angular, Typescript, Material, Bootstrap, Node.js, Mysql.</p>
        </div>
        <div className='projects'>
          {/* <h3>PROJECTS</h3> */}
          <h4>REAL ESTATE MANAGEMENT SYSTEM</h4>
          <h5>APARTMENT IN COPENHAGEN</h5>
          <p>Copenhagen, Denmark.</p>
          <p>July 2024 - Present.</p>

          <p>Developed a web application for a real estate company to track employee working hours.<br/>
          Implemented functionalities for employees to log work hours, descriptions, and timestamps.<br/>
          Created a comprehensive reporting system for the boss to view employee hours, categorize by holidays, and calculate pay based on time ranges.<br/>
          Technologies: MERN Stack (MongoDB, Express, React, Node.js).</p>
        </div>
    </div>
  )
}

export default SectionF
