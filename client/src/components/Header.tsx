import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cdrLogo from "../assets/LOGOCDR2.png";
// import TeamDataService from "../services/team";

export function HeaderApp() {
  //   useEffect(() => {
  //     if (searchField === "") {
  //       setListTeams([]);
  //     } else {
  //       TeamDataService.getTeams(searchField).then((response) => {
  //         setListTeams(response.data.team);
  //       });
  //     }
  //   }, [searchField]);

  return (
    <Navbar className="bg-teal-header" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={cdrLogo} height="50" width="50" alt="Search" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" title="Tabela">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6862/6862199.png"
                width="22"
                alt="Tabela"
                className="img-header"
              />
              <span>TABELA</span>
            </Nav.Link>
            <Nav.Link href="/equipes" title="Equipes">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2636/2636184.png"
                width="22"
                alt="Equipes"
                className="img-header"
              />
              <span>EQUIPES</span>
            </Nav.Link>
            <Nav.Link href="/regulamento" title="Regulamento">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1358/1358208.png"
                width="22"
                alt="Regulamento"
                className="img-header"
              />
              <span>REGULAMENTO</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
