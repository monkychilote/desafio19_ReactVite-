import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./Profile.css"; // Importar el archivo CSS

const Profile = () => {
  return (
    <Container className="container-full-height">
      <Card border="warning" className="profile-card">
        <Card.Body className="profile-card-body">
          <Card.Title className="text-center pb-3 pt-3">
            <strong>p.subiabre@gmail.com</strong>
          </Card.Title>
          <Button
            className="border btn btn-dark"
            variant="outline-light"
            type="submit"
          >
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
