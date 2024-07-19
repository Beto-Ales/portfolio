import React from 'react'

const calculateExperience = (startDate) => {
  const start = new Date(startDate)
  const now = new Date()
  const diffTime = Math.abs(now - start)
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25) // considering leap years
  return diffYears.toFixed(1) // to get a result like "1.5"
}

const SectionA = () => {
  const experienceStartDate = '2022-02-01' // Example start date (YYYY-MM-DD format)
  const experience = calculateExperience(experienceStartDate)
  return (
    <div className='a'>
        <div className="professional-summary">
            <h3>PROFESSIONAL SUMMARY</h3>
            <p>
                Dedicated and detail-oriented Full Stack Developer with over {experience} years of experience in developing web applications
                using modern technologies such as HTML, CSS, JavaScript, React, Angular, TypeScript, Node.js, Express, and Jest. Proven
                ability to create efficient and scalable web solutions, including a comprehensive real estate management system and
                hospital management applications. Proficient in Git for version control and experienced in deploying applications on
                different platforms.
            </p>
        </div>
    </div>
  )
}

export default SectionA