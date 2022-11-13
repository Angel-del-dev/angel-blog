import { Col, Media, Row } from "react-bootstrap";

export default function AuthorIntro() {
  return (
    <Row>
      <Col md="8">
        <Media className="mb-4 admin-intro">
          <img
          style={{borderRadius:"50%"}}
            width={64}
            height={64}
            className="mr-3"
            src="https://www.poemhunter.com/i/poem_image/77/44744777_poem_66.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">¡Saludos!</h5>
            <p className="welcome-text">
              Me llamo Àngel, me apasiona el terror y este es mi pequeño blog.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
}
