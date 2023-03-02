import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cdrLogo from "../assets/LOGOCDR2.png";
import { ImTrophy } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { HiNewspaper } from "react-icons/hi";
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
          <img className="img-brand-header" src={cdrLogo} alt="Search" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" title="Tabela">
              <ImTrophy className="img-header" />
              <span>TABELA</span>
            </Nav.Link>
            <Nav.Link href="/equipes" title="Equipes">
              <RiTeamFill className="img-header" />
              <span>EQUIPES</span>
            </Nav.Link>
            <Nav.Link href="/regulamento" title="Regulamento">
              <HiNewspaper className="img-header" />
              <span>REGULAMENTO</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
