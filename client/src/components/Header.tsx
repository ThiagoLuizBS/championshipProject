import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import cdrLogo from "../assets/LOGOCDR2.png";
import { ImTrophy } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { HiNewspaper } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export function HeaderApp() {
  const location = useLocation();

  return (
    <Navbar className="bg-teal-header" expand="lg">
      <Container>
        <Navbar.Brand className="brand-header">
          <Link to="/">
            <img className="img-brand-header" src={cdrLogo} alt="Search" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "option-selected-header"
                  : "option-header"
              }
              title="Tabela"
            >
              <ImTrophy className="img-header" />
              <span>TABELA</span>
            </Link>
            <Link
              to="/equipes"
              className={
                location.pathname === "/equipes"
                  ? "option-selected-header"
                  : "option-header"
              }
              title="Equipes"
            >
              <RiTeamFill className="img-header" />
              <span>EQUIPES</span>
            </Link>
            <Link
              to="/regulamento"
              className={
                location.pathname === "/regulamento"
                  ? "option-selected-header"
                  : "option-header"
              }
              title="Regulamento"
            >
              <HiNewspaper className="img-header" />
              <span>REGULAMENTO</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
