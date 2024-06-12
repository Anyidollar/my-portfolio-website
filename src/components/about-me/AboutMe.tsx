import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src="https://res.cloudinary.com/danf2pvl0/image/upload/v1709120519/WhatsApp_Image_2023-09-30_at_3.36.11_PM_qiu1ap.jpg"
          alt="Ifeanyi Onyekwere"
        />
        <div className="details">
          <AnimatedText
            text="Meet Ifeanyi Onyekwere."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I am a dedicated Frontend Engineer with one year of professional
            experience, currently based in Lagos, Nigeria. My passion lies in
            developing interactive and responsive user interfaces, striving to
            create dynamic user experiences that are accessible to all,
            including individuals with disabilities.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            During my tenure at Decagon, I have gained valuable experience
            across diverse sectors, significantly enhancing my proficiency in
            developing accessible and user-friendly web applications. Leveraging
            industry-leading tools such as Node.js,Javascript and React, I have
            successfully delivered robust solutions tailored to meet client
            needs. Moreover, my exposure to agile methodology has honed my
            ability to adapt to dynamic project requirements and deliver results
            efficiently.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            When I'm off my computer you might find me playing FIFA, watching
            movies, reading books, spending time with friends and family and
            other activities that helps me unwind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
