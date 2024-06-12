import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Closestead",
    description:
      "Closestead is a cutting-edge property management application designed with the latest technologies such as Node.js and React. Tailored to meet the needs of property owners, Closestead streamlines the management process with intuitive features and seamless integration. From efficient tenant communication to comprehensive property oversight, Closestead empowers property owners to effortlessly manage their portfolios and maximize their investments.",
    image:
      "https://res.cloudinary.com/danf2pvl0/image/upload/v1709176441/Screen_Shot_2024-02-29_at_3.18.17_AM_wbnt3w.png",
    url: "https://rankaque.com",
  },
  {
    name: "Elegance Art Gallery",
    description:
      "Elegance Art Gallery is an innovative app, designed to revolutionize the art-viewing experience. With Elegance, users can explore artworks and exhibitions from around the world, transcending geographical barriers. Utilizing cutting-edge technologies such as React.js, Redux, and Typescript, along with Cloudinary, Styled Components, SQLite, and Sequelize, Elegance promises a seamless and immersive journey through the world of art.",
    image:
      "https://res.cloudinary.com/danf2pvl0/image/upload/v1709175922/Screen_Shot_2024-02-29_at_3.02.52_AM_dlikzh.png",
    url: "https://elegance-gallery.netlify.app",
  },
  {
    name: "StratusGrowth",
    description:
      "Welcome to StratusGrowth, where we specialize in empowering business owners to maximize their revenue potential. Our dedicated team of specialists is committed to helping you achieve your business goals with precision and expertise.",
    image:
      "https://res.cloudinary.com/danf2pvl0/image/upload/v1709227943/Screen_Shot_2024-02-29_at_6.24.06_PM_v9olm5.png",
    url: "https://frolicking-snickerdoodle-2e09f2.netlify.app",
  },
  {
    name: "Filixmas Botanicals",
    description:
      "Employ Tailwindcss, Nextjs, and Typescript to construct interactive and responsive User Interfaces (UI). Create reusable React components and functions, fostering code modularity and reusability. Leverage React-Hooks and context API to develop interactive and stateful React components, implementing efficient routing using react-router. Utilize GIT as the primary code respository.",
    image:
      "https://res.cloudinary.com/danf2pvl0/image/upload/v1709177538/Screen_Shot_2024-02-29_at_4.29.19_AM_nujuw2.png",
    url: " https://www.filixmasbotanicals.com/",
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
