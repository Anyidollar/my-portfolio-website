import { useContext } from "react";
import { ThemeContext } from "../../App";

interface WorksIntroProps {}

const WorksIntro: React.FunctionComponent<WorksIntroProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "introWrapperDark" : "introWrapper"}>
      <div className="flexWks">
        <div className="textsintro">
          <p className={theme.isDarkmode ? "intTrextDark" : "intTrext"}>
          As a seasoned professional, I am currently spearheading a pivotal project for Closestead App, an innovative property management application meticulously crafted to streamline the responsibilities of property managers. My expertise lies in Node.js, React, and JavaScript, honed through extensive experience in the development and maintenance of robust web applications. At Decagon, I leverage my skills to drive the creation and management of cutting-edge web solutions, utilizing Node.js and React to achieve optimal outcomes. Moreover, my proficiency extends to agile methodologies, where I actively contribute to the seamless orchestration of project workflows, ensuring efficient project management and timely delivery
          </p>
          <p className={theme.isDarkmode ? "belDark" : "bel"}>
            View selected projects below
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700586403/image_31_rdbdw5.png"
          alt="ifeanyi onyekwere"
        />
      </div>
    </div>
  );
};

export default WorksIntro;
