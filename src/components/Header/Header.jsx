import { useState, useEffect } from "react";
import "./Header.scss";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("en") ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const currentLangLabel = i18n.language.startsWith("en") ? "FR" : "EN";

  return (
    <header className={`header ${isMenuOpen ? "header--menu-open" : ""}`}>
      <div className="header__logo">
        <img className="header__logo-img" src="#" alt="logo" />
      </div>

      <div className="header__menu">
        <button className="header__close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <nav className="header__nav">
          <button className="header__link">{t("header.services")}</button>
          <button className="header__link">{t("header.portfolio")}</button>
          <button className="header__link">{t("header.contact")}</button>
        </nav>
        <div className="header__lang">
          <button className="header__lang-link" onClick={toggleLanguage}>
            {currentLangLabel}
          </button>
        </div>
      </div>

      <button className="header__hamburger" onClick={toggleMenu}>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </button>
    </header>
  );
}
