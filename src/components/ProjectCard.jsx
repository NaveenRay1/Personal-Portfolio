import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {

  const CardContent = () => (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
  <Col xs={12} sm={6} md={4}>
            { /*link */} 
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardContent />
        </a>
      ) : (
        /* Otherwise, */
        <CardContent />
      )}
    </Col>
  )
}