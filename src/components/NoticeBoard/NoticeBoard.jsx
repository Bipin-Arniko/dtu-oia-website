import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './NoticeBoard.css';

const NoticeBoard = () => {
  const notices = [
  
    {
      text: 'Notice: Roll numbers of international students whose branch were upgraded',
      link: 'http://dtu.ac.in/Web/notice/2024/feb/file0204.pdf'
    },
    {
      text: 'Notice: Call for USIP Intern at Office of International Affairs-DTU.',
      link: '#notice3'
    },
    {
      text: 'Notice: Distribution of Identity card for 2K22 batch.',
      link: '#notice3'
    },
    {
      text: 'Notice: Roll numbers of international students whose branch were upgraded',
      link: 'http://dtu.ac.in/Web/notice/2024/feb/file0204.pdf'
    },
    {
      text: 'Notice: Call for USIP Intern at Office of International Affairs-DTU.',
      link: '#notice3'
    },
    {
      text: 'Notice: Distribution of Identity card for 2K22 batch.',
      link: '#notice3'
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage, setNoticesPerPage] = useState(5);

  const openModal = () => {
    setCurrentPage(1);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const startIndex = (currentPage - 1) * noticesPerPage;
  const endIndex = startIndex + noticesPerPage;

  const nextPage = () => {
    if (endIndex < notices.length) {
      setCurrentPage(currentPage + 1);
    }
  };


  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const updateNoticesPerPage = () => {
      if (window.innerWidth < 768) {
        setNoticesPerPage(3);
      } else if (window.innerWidth < 1324) {
        setNoticesPerPage(4);
      } else {
        setNoticesPerPage(5);
      }
    };

    window.addEventListener('resize', updateNoticesPerPage);

    updateNoticesPerPage();
    return () => {
      window.removeEventListener('resize', updateNoticesPerPage);
    };
  }, []);

  return (
    <div className="notice-board">
      <h2>Notice Board</h2>
      <ul>
        {notices.slice(0, 3).map((notice, index) => (
          <li key={index}>
            <a href={notice.link} target='_blank' rel='noopener noreferrer'>{notice.text}</a>
          </li>
        ))}
      </ul>
      <button onClick={openModal} className="see-all-button">
        See All
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="All Notices"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className='h2overlay'>All Notices</h2>
        <ul>
          {notices.slice(startIndex, endIndex).map((notice, index) => (
            <li key={index}>
              <a target='_blank' rel='noopener noreferrer' href={notice.link} >{notice.text}</a>
            </li>
          ))}
        </ul>
        <button onClick={prevPage} className='prev-page-button' disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={nextPage} className='next-page-button' disabled={endIndex >= notices.length}>
          Next Page
        </button>
        <button onClick={closeModal} className='closecheck'>Close</button>
      </Modal>
    </div>
  );
};

export default NoticeBoard;
