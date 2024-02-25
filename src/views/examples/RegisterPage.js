import React, { useEffect, useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  Alert,
  FormGroup,
  Badge,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PropTypes from "prop-types";

async function LoginUser(credentials) {
  return fetch("http://localhost:8080/api/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function RegisterPage({ saveToken, roleInvalide }) {
  const [unvalideLogIn, setUnvalideLogIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []); // Empty dependency array to run effect only once

  useEffect(() => {
    if (roleInvalide) {
      setErrorMessage("Vous avez pas l'accées a cette section");
      setUnvalideLogIn(true);
    }
  }, [unvalideLogIn, roleInvalide]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await LoginUser({
      username,
      password,
    });
    if (!saveToken(token)) {
      setErrorMessage("Username ou Password invalide");
      setUnvalideLogIn(true);
    } else if (roleInvalide) {
      setErrorMessage("Vous avez pas l'accées a cette section");
      setUnvalideLogIn(true);
    }
  };

  //  const handleLogin = () => {};
  return (
    <>
      <IndexNavbar changeColor={true} />

      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/register.jpg") + ")",
        }}
      >
        <div className="filter" />

        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Bienvenu</h3>

                <Form onSubmit={handleLogin} className="register-form">
                  <label>Username</label>
                  {unvalideLogIn && (
                    <FormGroup className="has-danger">
                      <Input
                        placeholder="Username"
                        className="form-control-danger"
                        id="inputDanger1"
                        type="text"
                        value={username}
                        onChange={(input) => setUsername(input.target.value)}
                      />
                    </FormGroup>
                  )}
                  {!unvalideLogIn && (
                    <Input
                      placeholder="Username"
                      type="text"
                      value={username}
                      onChange={(input) => setUsername(input.target.value)}
                    />
                  )}
                  <label>Mot de passe</label>
                  {unvalideLogIn && (
                    <FormGroup className="has-danger">
                      <Input
                        placeholder="Password"
                        className="form-control-danger"
                        id="inputDanger1"
                        type="password"
                        value={password}
                        onChange={(input) => setPassword(input.target.value)}
                      />
                    </FormGroup>
                  )}
                  {!unvalideLogIn && (
                    <Input
                      placeholder="Mot de passe"
                      type="password"
                      value={password}
                      onChange={(input) => setPassword(input.target.value)}
                    />
                  )}
                  {unvalideLogIn && (
                    <center>
                      <Badge color="danger" className=" text-center" pill>
                        {errorMessage}
                      </Badge>
                    </center>
                  )}
                  <Button
                    block
                    className="btn-round"
                    color="neutral"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    mot de passe oublié?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, Created by Yassine ELkamel et Nour El
            Houda Salem{" "}
          </h6>
        </div>
      </div>
    </>
  );
}
RegisterPage.propTypes = {
  saveToken: PropTypes.func.isRequired,
  roleInvalide: PropTypes.bool,
};
export default RegisterPage;
