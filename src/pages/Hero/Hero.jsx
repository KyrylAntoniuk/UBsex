import "./Hero.scss";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero">
        <h1 className="hero__title">{t("hero.title")}</h1>
        <div className="hero__description">
          <p className="hero__text">{t("hero.subtitle1")}</p>
          <p className="hero__text">{t("hero.subtitle2")}</p>
        </div>
        <button className="hero__btn">{t("hero.button")} &rarr;</button>
      </section>

      <section className="description-section">
        <div className="description-section__title-wrapper">
          <h2 className="description-section__title">
            <span className="description-section__line-one">
              <span className="description-section__highlight">WE Build</span>{" "}
              The Websites
            </span>
            <span className="description-section__line-two">
              <span className="description-section__highlight">
                Your Business
              </span>
              Deserves.
            </span>
          </h2>
        </div>
        <button className="hero__btn">Let’s talk</button>
        <div className="description-section__box-container">
          <div className="description-section__box-item">
            <h3>Concept & Consultation</h3>
            <p>
              Let's align on your vision. We start with a detailed consultation
              to define the aesthetic and functional requirements that will set
              your brand apart from the competition.
            </p>
            <button>&#8592;</button>
          </div>
          <div className="description-section__box-item">
            <h3>Concept & Consultation</h3>
            <p>
              Let's align on your vision. We start with a detailed consultation
              to define the aesthetic and functional requirements that will set
              your brand apart from the competition.
            </p>
            <button>&rarr;</button>
          </div>
          <div className="description-section__box-item">
            <h3>Concept & Consultation</h3>
            <p>
              Let's align on your vision. We start with a detailed consultation
              to define the aesthetic and functional requirements that will set
              your brand apart from the competition.
            </p>
            <button>&#8594;</button>
          </div>
        </div>
      </section>
    </>
  );
}
