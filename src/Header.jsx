import { useState, React } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  //List of languages you wish to translate your application into
  const { t, i18n } = useTranslation();
  const lngs = {
    fr: { nativeName: "Français" },
    en: { nativeName: "English" },
    de: { nativeName: "Deutsch" },
  };

  //Change dropdown title on language selection
  const [dropdownTitle, setdropdownTitle] = useState(
    t("Component.header.language", "Language")
  );

  return (
    <Navbar expand="lg" className="header-container navbar-dark">
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ms-auto">
          <NavDropdown
            title={dropdownTitle}
            id="basic-nav-dropdown"
            className="px-4 color-white "
          >
            {Object.keys(lngs).map((lng) => (
              <NavDropdown.Item
                key={lng}
                style={{
                  fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => {
                  i18n.changeLanguage(lng);
                  setdropdownTitle(lngs[lng].nativeName);
                }}
              >
                {lngs[lng].nativeName}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
