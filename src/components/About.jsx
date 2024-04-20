import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <div className="about">
      <h1>Sanchita Rastogi</h1>
      <h3>Frontend Engineer</h3>
      <h4> Crafting Digital Experiences with Passion and Precision </h4>
      <FontAwesomeIcon className="mail" icon={faEnvelope} />
      <span className="mail-text  "> sanchitarastogi03@gmail.com</span>{" "}
      <FontAwesomeIcon className="location" icon={faLocationDot} />
      <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      <FontAwesomeIcon className="github" icon={faGithub} />
    </div>
  );
};
