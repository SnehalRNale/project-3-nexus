import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section id="about-section" className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookVerse</h2>
            <p className='fs-17'>Welcome to BookVerse, your literary sanctuary in the digital world. At BookVerse, we believe in the transformative magic of books and the profound impact they have on our lives. Our platform is dedicated to helping readers of all backgrounds and interests discover the perfect book for every moment, whether it's a thrilling adventure, a captivating romance, or a thought-provoking exploration of the human experience.</p>
            <p className='fs-17'>BookVerse is more than just a website - it's a vibrant community of book lovers united by their passion for storytelling. Our mission is to create a space where readers can connect, explore, and celebrate the boundless wonders of literature together. Join us on this journey as we journey through the pages of countless stories, finding solace, inspiration, and joy in the world of books.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About