import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-item">
        <img src="project1.jpg" alt="Project 1" />
        <p>Project description here.</p>
      </div>
      <div className="portfolio-item">
        <img src="project2.jpg" alt="Project 2" />
        <p>Project description here.</p>
      </div>
    </div>
  )
}

export default Portfolio