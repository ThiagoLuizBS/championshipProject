import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import cdrLogo from "../assets/LOGOCDR2.png";
import { ImTrophy } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { GiTopHat, GiSoccerBall } from "react-icons/gi";
import { HiNewspaper } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export function HeaderApp() {
  const location = useLocation();
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

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
            <div className="icon-header">
              <GiSoccerBall />
              <span className="name-header">FIFA</span>
            </div>
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
          {width > 991 && <span className="name-header">|</span>}
          <Nav className="m-auto">
            <div className="icon-header">
              <GiTopHat />
              <span className="name-header">CARTOLA</span>
            </div>
            <Link
              to="/cartola"
              className={
                location.pathname === "/cartola"
                  ? "option-selected-header"
                  : "option-header"
              }
              title="Tabela"
            >
              <ImTrophy className="img-header" />
              <span>TABELA</span>
            </Link>
            <Link
              to="/equipes-cartola"
              className={
                location.pathname === "/equipes-cartola"
                  ? "option-selected-header"
                  : "option-header"
              }
              title="Equipes"
            >
              <RiTeamFill className="img-header" />
              <span>EQUIPES</span>
            </Link>
            <Link
              to="/regulamento-cartola"
              className={
                location.pathname === "/regulamento-cartola"
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
