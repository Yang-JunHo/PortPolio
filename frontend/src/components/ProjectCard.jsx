import '../App.css';
import { React, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
// import '../css/Card.css'

const ProjectCard = ({ id, data }) => {
  console.log('data', data);

  const handleDownload = (id) => {
    const pdfUrl = `https://storage.googleapis.com/portpolio1/${id}.pdf`; // GCS URL

    // 브라우저에서 직접 링크 열기
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', `${id}.pdf`); // 다운로드 파일명
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [buttonText, setButtonText] = useState("자세히보기");

  const handleRedirect = (data) => {
    window.location.href = data.github;
  };

  const handleSiteRedirect = (data) => {
    window.location.href = data.site;
  };

  return (
    <Card className="card">
      {data.imgSrc && <Card.Img variant="top" src={`${process.env.PUBLIC_URL}${data.imgSrc}`} className="card-img-top" />}
      <Card.Body className="card-body">
        <Card.Title className="card-title">{data.Mtitle}</Card.Title>
        <Card.Title className="card-title">{data.Stitle}</Card.Title>
        <Card.Text className="card-text">
          {data.outline}
          <br/><br/>
          <div style={{ color: "black"}}>
          {data.content}
          </div>
        </Card.Text>
      </Card.Body>
      <div className='overlay'>
        <Card.Body className="card-body">
          <Card.Title className="card-title">{data.Mtitle}</Card.Title>
          <Button
            onClick={() => handleDownload(id)}
            onMouseEnter={() => setButtonText("PDF 다운로드")}
            onMouseLeave={() => setButtonText("자세히보기")}>{buttonText}</Button>
          <Button onClick={() => handleRedirect(data)}>Github바로가기</Button>
          { 
            data.site
            ? <Button onClick={() => handleSiteRedirect(data)}>사이트 바로가기</Button>
            : null
          }
        </Card.Body>
      </div>
    </Card>
  )
};
export default ProjectCard;