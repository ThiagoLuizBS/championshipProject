import { useState, useEffect, useRef } from "react";
import { Container, Nav, NavDropdown, Navbar, Form } from "react-bootstrap";
import cdrLogo from "../assets/LOGOCDR2.png";
import { ImTrophy } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { GiTopHat, GiSoccerBall } from "react-icons/gi";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export function HeaderApp() {
  const location = useLocation();
  const hoverFifa = useRef<any>(null);
  const hoverCartola = useRef<any>(null);
  const [dropdownFifa, setDropdownFifa] = useState<boolean>(false);
  const [dropdownCartola, setDropdownCartola] = useState<boolean>(false);
  const [themeChecked, setThemeChecked] = useState<string>("");

  useEffect(() => {
    const localTheme = window?.localStorage?.getItem("data-theme");
    if (localTheme) setThemeChecked(JSON.parse(localTheme));
    else setThemeChecked("light");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("data-theme", JSON.stringify(themeChecked));
    document.querySelector("body")?.setAttribute("data-theme", themeChecked);
  }, [themeChecked]);

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setThemeChecked("dark");
      setDarkMode();
    } else {
      setThemeChecked("light");
      setLightMode();
    }
  };

  const returnTheme = () => {
    if (themeChecked === "dark")
      return <FaMoon className="icon-theme-header" />;
    else return <BsFillSunFill className="icon-theme-header" />;
  };

  const enterFifa = () => {
    clearTimeout(hoverFifa.current);
    setDropdownCartola(false);
    setDropdownFifa(true);
  };

  const leaveFifa = () => {
    hoverFifa.current = setTimeout(() => {
      setDropdownFifa(false);
    }, 200);
  };

  const enterCartola = () => {
    clearTimeout(hoverCartola.current);
    setDropdownFifa(false);
    setDropdownCartola(true);
  };

  const leaveCartola = () => {
    hoverCartola.current = setTimeout(() => {
      setDropdownCartola(false);
    }, 200);
  };

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
            <NavDropdown
              className="icon-header"
              title={
                <>
                  <GiSoccerBall className="margin-header" />
                  <span>FIFA</span>
                </>
              }
              menuVariant={themeChecked}
              show={dropdownFifa}
              onMouseOver={() => enterFifa()}
              onMouseLeave={() => leaveFifa()}
            >
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "option-selected-header"
                    : "option-header"
                }
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
              >
                <HiNewspaper className="img-header" />
                <span>REGULAMENTO</span>
              </Link>
            </NavDropdown>
            <NavDropdown
              className="icon-header"
              title={
                <>
                  <GiTopHat className="margin-header" />
                  <span>CARTOLA</span>
                </>
              }
              menuVariant={themeChecked}
              show={dropdownCartola}
              onMouseOver={() => enterCartola()}
              onMouseLeave={() => leaveCartola()}
            >
              <Link
                to="/cartola"
                className={
                  location.pathname === "/cartola"
                    ? "option-selected-header"
                    : "option-header"
                }
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
              >
                <HiNewspaper className="img-header" />
                <span>REGULAMENTO</span>
              </Link>
            </NavDropdown>
          </Nav>
          <Form.Check
            type="switch"
            className="checkbox-header"
            checked={themeChecked === "dark" ? true : false}
            label={returnTheme()}
            onChange={(e) => toggleTheme(e)}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
