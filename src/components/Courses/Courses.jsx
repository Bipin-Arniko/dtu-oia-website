import React from 'react'
import './Courses.css'
const Courses = () => {
  return (
    <section className="courses">
        <h2>Courses Offered</h2>
        <div className="container courses__container">
            <article className="course">
                <div className="course__image">
                    <img src="./dtulogo.png" alt=""/>
                </div>
                <div className="courseinfo">
                <h4>Bachelors in Technology</h4>
                <p>Total of 14 B.Tech courses are offered to international Students based via mode-1, mode-2 and mode-3.</p>
                <a href="http://dtu.ac.in/Web/Academics/bacheloroftechnology.php" className="coursebtn" target='_blank'>Learn More</a></div></article>
            <article className="course">
                <div className="course__image">
                    <img src="./dtulogo.png" alt=""/>
                </div>
                <div className="courseinfo">
                <h4>Masters in Technology</h4>
                <p>Total of 25 M.Tech courses are offered to international Students based on the respective criteria of admission.</p>
                <a href="http://dtu.ac.in/Web/AcademicsPG/mtech.php" className="coursebtn" target='_blank'>Learn More</a></div></article>
            <article className="course">
                <div className="course__image">
                    <img src="./dtulogo.png" alt=""/>
                </div>
                <div className="courseinfo">
                <h4>Masters in Business Administration</h4>
                <p>DTU offers two years MBA via its own campus, Delhi School of Management (DSM) and University School of Management and Entrepreneurship (USME) across 4 specialisations.</p>
                <a href="http://dtu.ac.in/Web/AcademicsPG/mba.php" className="coursebtn" target='_blank'>Learn More</a>
            </div> </article>
            <article className="course">
                <div className="course__image">
                    <img src="./dtulogo.png" alt=""/>
                </div>
                <div className="courseinfo">
                <h4>Bachelors in Business Administration</h4>
                <p>DTU offers three years BBA via its own campus, Delhi School of Management (DSM) and University School of Management and Entrepreneurship (USME).</p>
                <a href="https://www.cmacadmissions.com/file_uploads/1/document_file_c3fee19828fd368ec342abc5b79be8de.pdf" className="coursebtn" target='_blank'>Learn More</a>
                </div></article>
        </div>
    </section>
  )
}

export default Courses
