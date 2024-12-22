import React from 'react'
// import projectList from '../json/project.json'
import Header from '../components/Header';
import Aboutme from '../components/Aboutme'
import Project from '../components/Project'
// import { DiGithubBadge } from "react-icons/di";
import { FiPaperclip } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaAngleDoubleUp } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import '../App.css';

const Home = () => {
  // console.log('projectList', projectList.projectList);

  const handlePortDownload = () => {
    const pdfUrl = `https://storage.googleapis.com/portpolio1/PortPolio.pdf`; // GCS URL

    // 브라우저에서 직접 링크 열기
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', `YangJunHo_PortPolio.pdf`); // 다운로드 파일명
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeDownload = () => {
    const pdfUrl = `https://storage.googleapis.com/portpolio1/Resume.pdf`; // GCS URL

    // 브라우저에서 직접 링크 열기
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', `YangJunHo_PortPolio.pdf`); // 다운로드 파일명
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="cta">
        <a onClick={() => handlePortDownload()} className="icon email-icon">
          <ImNewspaper />
          <span className="tooltip">포트폴리오.pdf</span>
        </a>
        <a onClick={() => handleResumeDownload()} target="_blank" rel="noopener noreferrer" className="icon">
          <FiPaperclip />
          <span className="tooltip">이력서.pdf</span>
        </a>
        <a href="mailto:yjy3070@gmail.com" className="icon email-icon">
          <MdOutlineEmail />
          <span className="tooltip">E-mail</span>
        </a>
        <a href="#top" className="icon">
          <FaAngleDoubleUp />
          <span className="tooltip">맨 위로</span>
        </a>
      </div>

      <div className="container1">
        <Aboutme />
        <Project />
      </div>
    </>
  )
}

export default Home