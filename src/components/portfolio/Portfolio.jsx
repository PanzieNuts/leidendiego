import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    title: "Payslip",
    description:
      "I ensure accurate and timely payslip processing, combining efficiency with meticulous attention to detail.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    title: "Hiring",
    description:
      "I created a streamlined hiring template to simplify candidate evaluation and improve recruitment efficiency.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    title: "Absent Form",
    description:
      "Designed a clear and efficient absent form to monitor attendance and maintain accurate records.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    title: "Certificate of Employment",
    description:
      "Created a professional certificate template to verify employment and ensure accurate employee records.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    title: "Interview Invitation",
    description:
      "Created a standardized interview invitation to streamline candidate communication and ensure a professional recruitment process.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    title: "Memo",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            These examples demonstrate my hands-on experience in HR support,
            documentation management, and administrative assistance.
          </p>
        </div>
      </div>

      {/* ✅ Grid of project tiles */}
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      {/* ✅ "More" button below tiles, linking to Google Drive */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://drive.google.com/drive/folders/12Z3G-K7YHmgZ0wWU081Dp1bZvAJI6hWN?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-picto-primary border border-picto-primary hover:bg-picto-primary hover:text-white text-sm xs:text-[16px] font-semibold transition-all duration-300 py-3 px-8 rounded-lg flex items-center gap-2"
        >
          More
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
