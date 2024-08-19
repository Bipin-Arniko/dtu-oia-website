import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='container8'>   
    <section className="about__achievements">
        <div  className="about__achievements-container">
            <div  className="about__achievements-left">
          <img src="Dean OIA.jpeg" alt="" className='leftpic' />
          <h3>Prof. Pravir Kumar</h3>
          <p>Dean, International Affairs</p>
            </div>
            <div  className="about__achievements-right">
            <div class="right-border-top">
  </div><div className="rightpad">
                <h1 className='OIAhead'> Office of International Affairs</h1>
                <p>The Office of International Affairs at DTU, serves as a pivotal hub for fostering global connections and collaborations within the university community. Dedicated to supporting international students and faculty, the office plays a crucial role in admissions, orientation programs for students arriving from around the world. Facilitating international collaborations, the office promotes partnerships, research initiatives, and student exchange programs, contributing to a diverse and vibrant academic environment.
                </p>
                <div  className="achievements__cards">
                    <article  className="achievement_card">
                        <span  className="achievement_icon">
                            <i  className="fa-solid fa-book-open"></i>
                        </span>
                        <h1 style={{color:"var(--color-bg)"}}>20+</h1>
                        <p>Courses</p>
                    </article>
                    <article  className="achievement_card">
                        <span  className="achievement_icon">
                            <i  className="ri-team-fill"></i>
                        </span>
                        <h1 style={{color:"var(--color-bg)"}}>500+</h1>
                        <p>International Students</p>
                    </article>
                    <article  className="achievement_card">
                        <span  className="achievement_icon">
                            <i  className="ri-wallet-3-line"></i>
                        </span>
                        <h1 style={{color:"var(--color-bg)"}}>11.5 </h1>
                        <h6 style={{color:"var(--color-bg)"}}>LPA</h6>
                        <p>Median CTC </p>
                    </article>
                </div>
                </div>
            </div>
        </div>
    </section>
    
<section  className="team">
    <h1>
        Meet Our Team
    </h1>
    <div  className="about__achievements">
        <div className="carddisplay">
    <div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
    <img src="Dean OIA.jpeg" alt="" />
  </div>
  <span> Prof. Pravir Kumar</span>
  <p class="job"> Dean, OIA</p>
</div>
<div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
    <img src="" alt="" />
  </div>
  <span> Dr. Richa Srivastava</span>
  <p class="job"> Coordinator</p>
</div>

<div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
  <img src="" alt="" />
  </div>
  <span> Dr. Sumedha Seniaray</span>
  <p class="job"> Coordinator</p>
</div>
<div class="card">
  <div class="card-border-top">
  </div>
  <div class="img">
  <img src="Prof. Ritu Raj.png" alt="" />
  </div>
  <span> Dr. Ritu Raj</span>
  <p class="job"> Coordinator</p>
</div>
</div>

        
    </div>
</section>
    
</div>
  )
}

export default About
