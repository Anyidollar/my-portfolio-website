import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/Anyidollar?tab=repositories"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ifeanyi github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.instagram.com/onyekwere_247/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ifeanyi instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://twitter.com/Anyidollar247"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ifeanyi twitter account"
      >
        <TwitterIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/ifeanyi-onyekwere-675859256/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Ifeanyi linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
