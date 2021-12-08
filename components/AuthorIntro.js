import { Col, Image, Media, Row } from "react-bootstrap";

export default function AuthorIntro() {
  return (
    <Row>
      <Col md="8">
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://www.poemhunter.com/i/poem_image/77/44744777_poem_66.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">¡Saludos!</h5>
            <p className="welcome-text">
              Me llamo Àngel, soy desarrollador full stack y este es mi
              blog.
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
}
