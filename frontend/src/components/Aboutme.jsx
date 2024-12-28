import '../App.css';
import { React, useState } from 'react'
// import '../css/AboutMe.css'
// import useScrollAnimation from '../hooks/useScrollAnimation';
// import ScrollAni from '../ScrollAni';
// import tw from 'tailwind-styled-components';/
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { motion } from "framer-motion"

const Aboutme = () => {

  const [buttonText, setButtonText] = useState("자세히 보기 ➔");

  const handleDownload = () => {
    const pdfUrl = `https://storage.googleapis.com/portpolio1/AboutMe.pdf`; // GCS URL

    // 브라우저에서 직접 링크 열기
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', `YangJunHO_AboutMe.pdf`); // 다운로드 파일명
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <div className="about-container">
        <section className="about-section">
          <h1>About me</h1>
          <div className="avatar">
            <img src={`${process.env.PUBLIC_URL}/img/profile.png`} className="avatar-image" alt='프로필'></img>
          </div>
          <div className="hashtags">
            <span># 유연한 사고</span>
            <span># 업무에 대한 책임감</span>
            <span># 오픈 마인드</span>
            <span># 역지사지</span>
            <span># 팀원간의 소통과 협업</span>
          </div>
          <button
            className="team-button"
            onClick={() => handleDownload()}
            onMouseEnter={() => setButtonText("PDF 다운로드")} // 마우스 오버 시
            onMouseLeave={() => setButtonText("자세히 보기 ➔")} // 마우스가 떠날 때
          >
            <span className="arrow">{buttonText}</span>
          </button>
          <h1>Skills</h1>
          <div className='skillList'>
            <div className='skillDetail'>
              <h2>Frontend</h2>
              <IoLogoHtml5 size="3em" color="red" />
              <IoLogoCss3 size="3em" color="blue" />
              <IoLogoJavascript size="3em" color="yellow" />
              <IoLogoReact size="3em" color="skyblue" />
            </div>
            <div className='skillDetail'>
              <h2>Backend</h2>
              <IoLogoNodejs size="3em" color="green" />
              <IoLogoPython size="3em" color="white" />
            </div>
            <div className='skillDetail'>
              <h2>DataBase</h2>
              <SiMysql size="3em" color="white" />
              <SiOracle size="3em" color="orange" />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
};

export default Aboutme;