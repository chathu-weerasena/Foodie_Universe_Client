import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const Homepage = () => {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg"
              />
              <Card.Body>
                <Card.Title>Photos</Card.Title>
                <Card.Text>
                  Welcome to the creative captures of your favorite food.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.vox-cdn.com/thumbor/7HRjMUBf0ObMoA33zNPSYJEKsOE=/0x0:1600x1067/620x465/filters:focal(672x406:928x662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
              />
              <Card.Body>
                <Card.Title>Restaurants</Card.Title>
                <Card.Text>
                  Share your dining experience with fellow Foodies!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
