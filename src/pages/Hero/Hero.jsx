import "./Hero.scss";
import { useTranslation } from "react-i18next";
import LogoSvg from "../../assets/Group 12.svg";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero">
        <div className="hero_container">
          <img src={LogoSvg} alt="logo" />
          svg
          <div className="hero_content">
            <h1>Beyond web designe</h1>
            <p>
              We build digital foundations for your business.
              <br />
              Ready to bring your vision to life? Use our interactive calculator
              to see how we can fit your budget and timeline.
            </p>
            <div className="hero_btn">
              <button className="btn_light">More about us</button>
              <button className="btn_dark">Contact us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
