import React, { useState, useEffect } from 'react';
import './Home.css';
import data1 from '../../utils/accordion'
import data2 from '../../utils/slider.json'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/swiper-bundle.css';

import "swiper/css"

import { sliderSettings } from '../../utils/common'
const Modal = ({ modalOpen, toggleModal }) => {
  return (
    <div className="modal-container">
      <button className="modal-toggle-button" onClick={toggleModal}>
        How to reach DTU?
      </button>
      {modalOpen && (
        <div className="modal2">
          <div className="modal-content">
            <h2>How to reach DTU?</h2>
            <p>DTU, is situated in North - West Delhi, India. It is approximately 32 kilometers from the Indira Gandhi International Airport , New Delhi.

<br/><br/>
<strong>Non Delhi Residents:</strong>
<br/>

(1) From ISBT Kashmiri Gate : Use the Delhi Metro Rail Service to reach the Rithala Metro station from ISBT.

<br/>
From New Delhi Railway Station: Use the Delhi Metro Rail Service to reach the Kashmiri Gate Metro station. From this station board the metro for Rithala Metro Station.


From Indira Gandhi International Airport: From IGI Airport to Rithala Metro Station .

Once at Rithala, board local transport, auto or bus to get to Shahbad/Daulatpur which 3-4 kms from Rithala Metro Station. DTU is located in Shahbad/Daulatpur.
<br/>

(2) Taxi Services are the preferred mode of transportation when arriving from Domestic or International Airport of New Delhi.

<br/><br/>
<strong>Delhi Residents:</strong>

<br/>
(1) By Bus :


Residents having easy access to the Inner Ring Road can board a bus (Mudrika, 442, 479) for Wazirpur Bus Depot or the Azadpur Bus Terminal. After reaching the wazirpur depot the commuter may board Route No. 889 which will take him/her to the college.


Residents having easy access to the Outer Ring Road can board Outer Mudrika and get down at Madhuban Chowk. Bus No. 879 take the commuter to the campus from Madhuban Chowk.


West Delhi residents can board Route No. 879 which will take them directly to DTU campus.


North Delhi Residents can reach the Madhuban Chowk by preferable mode of travel. Bus No. 879 take the commuter to the campus from Madhuban Chowk.

<br/>
(2) By Metro :


South Delhi residents need to reach the Metro Station at Central Secretariat or Rajiv Chowk (Connaught Place) or Patel Chowk. They then have to board the yellow line (underground) to the Kashmere Gate metro station. At the Kashmere Gate Metro Station they must board a red line (elevated) metro train bound towards Rithala. They then have to get off at the Rithala Metro Station. North Delhi residents must reach the Netaji Subhash Place (Wazirpur) Metro station and board a train bound for Rithala. They then have to get off at the Rithala Metro Station.


West Delhi residents can take the Metro’s Blue line to Rajiv Chowk and then board the Metro’s yellow line (underground) train bound for Delhi University. They have to switch trains at the Kashmere Gate metro Station and board a red line (elevated) metro train bound for Rithala. They must get off at the Rithala Metro Station.


Once at Rithala, board local transport, auto or bus to get to Shahbad/Daulatpur which 3-4 kms from Rithala Metro Station. DTU is located in Shahbad/Daulatpur.Through yellow line, you can directly reach to Samaypur Badli metro station and from there you can get an e-rickshaw to reach DTU campus.

<br/><br/><strong>
Note : Taxi Services in New Delhi do not ply on predefined routes and can directly take the visitor to the destination.</strong></p>
            <button onClick={toggleModal} className='closebtnmodal'>Close</button>
          </div>

        </div>
        
      )}
      
    </div>
  );
}
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  
    const images = [
        { url: 'img3.jpeg', title: 'Nepalese Students Performing at International Students Day' },
        { url: 'img4.jpeg', title: 'Performance of Madhurima Band at International Students Day' },
        { url: 'img1.jpeg', title: 'Open Air Theatre of DTU' },
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [imageFade, setImageFade] = useState(false);
    
      const nextImage = () => {
        setImageFade(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          setImageFade(false);
        }, 300);
      };
    
      const prevImage = () => {
        setImageFade(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
          setImageFade(false);
        }, 300); 
      };
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          nextImage();
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []); 
    
      return (
        <div>
        <div className="slider-container r-buttons2">
          <button onClick={prevImage}>&lt;</button>
          <img
            src={images[currentImageIndex].url}
            alt={`Image ${currentImageIndex + 1}`}
            className={`slider-image ${imageFade ? 'fade' : ''}`}
          />
          <h3 className="image-title">{images[currentImageIndex].title}</h3>
          <button onClick={nextImage}>&gt;</button>
        </div>
        <section className="headerwala">
      <div className="container header_container">
        <div className="header__left">
          <h1>About DTU</h1>
          <p>
            Delhi Technological University (formerly Delhi College of Engineering) has an illustrious history spanning over 80 years. This prestigious institution is well known throughout the world for its world-class education and student-centric research & innovations. In this university, the culture of research and innovations is inculcated right from the UG level. We have brilliant faculty and highly distinguished alumni who have made a mark worldwide. It is a testament to the ability of the university in educating future leaders.
          </p>
          <a href="http://www.dtu.ac.in/Web/About/history.php" className="aboutdtubtn" target='blank'>
            Get Started
          </a>
        </div>
        <div className="header__right">
          <img src="./dtulogo.png" alt="Students" />
        </div>
      </div>
    </section>

    <section className="categories">
    <div className="container categories__container">
        <div className="categories__left">
            <h1>Mode of Admission</h1>
            <p>
                Out of the 15% seat on supernumerary basis, three modes of admission of Foreign Nationals/Indian Nationals studying abroad/Overseas Citizen of India are prescribed.
            </p>
            <a href="international_brochure.pdf" className="btn" target="_blank">Learn More</a>
        </div>
        <div className="categories__right">
            <article className="category">
                <div className="category__icon">
                    <h4>ICCR</h4>
                </div>
                
                <p>Under this category, the application of the candidates shall be routed directly through Indian Council of Cultural Relation (ICCR).(link: http://a2ascholarships. iccr.gov.in/) </p>
            </article>
            <article className="category">
                <div className="category__icon">
                   <h4>DTU Portal</h4>
                </div>
                <p>Under this category, candidates shall apply on-line in the prescribed format before the last date directly on the web portal of the office of International Affairs (link: https://dtu.ac.in/).</p>
            </article>
            <article className="category">
                <div className="category__icon">
                   <h4>DASA</h4>
                </div>
                <p>Under this category, the student directly apply Complete through DASA portal. Complete information regarding the procedure of admission, eligibility and payment of fee will be available on DASA website (link: http:/www/dasanit.org)</p>
            </article>


        </div>
    </div>
</section> 

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



    <section className="faqs">
        <div className="container "><h2>Frequently Asked Question</h2>
            <div className="v-container">
                    <Accordion  className="accordion"
                        allowMultipleExpanded={false}
                        >
                        {
                        data1.map((item, i) => {
                                return(
                                    <AccordionItem className="accordionItem" key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton style={{ backgroundColor: 'white', color: 'var(--color-bg1);',fontFamily:"sans-serif", }}>
                                                <span style={{color:"var(--color-bg1"}}>{item.heading}</span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>{item.detail}</p>
                                        </AccordionItemPanel>

                                    </AccordionItem>

                                );
                            })}
                    </Accordion>
                </div>
        </div>
        </section>



        <section className="container2">
        <div className="container">
            <div className=" r-container">
                <div className="r-head">
                        <h2>Testimonials</h2>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data2.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="r-card">
                                    <img className="testaimage" src={card.image} alt="" />
                                    <span className="secondaryText r-price">
                                    <span>{card.mode}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="detailText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        )

                        )
                    }
                </Swiper>
            </div>
        </div>
        </section>
        <Modal modalOpen={modalOpen} toggleModal={toggleModal} />
        
        </div>
        
      );
      
    };
    

export default Home
const SliderButtons = () => {
  const swiper=useSwiper();
  return (
      <div className="r-buttons">
          <button onClick={()=>swiper.slidePrev()}>&lt;</button>
          <button onClick={()=>swiper.slideNext()}>&gt;</button>
      </div>
  )
}