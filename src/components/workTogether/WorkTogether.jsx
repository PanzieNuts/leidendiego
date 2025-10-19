import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll"; // <-- Import Link

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-black md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Project Idea? Let's discuss your project!
        </p>
        <p className="text-black text-xs sm:text-lg font-normal text-center pb-8">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>

        {/* Smooth scroll to contact section with same button size */}
        <Link
          to="contact"
          smooth={true}
          duration={900}
          offset={-100} // adjust if navbar covers content
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px] text-white"
        >
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </Link>
      </div>
    </div>
  );
};

export default WorkTogether;
