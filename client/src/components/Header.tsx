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
    <Navbar className="bg-teal" fixed="top" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={cdrLogo} height="50" width="50" alt="Search" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6862/6862199.png"
                height="22"
                width="22"
                alt="Search"
                className="nav-img"
              />
              <span className="nav-font" title="Tabela">
                TABELA
              </span>
            </Nav.Link>
            <Nav.Link href="/regulamento">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1358/1358208.png"
                height="22"
                width="22"
                alt="Search"
                className="nav-img"
              />
              <span className="nav-font" title="Regulamento">
                REGULAMENTO
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
