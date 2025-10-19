import person from "../../assets/images/person1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import cvFile from "../../assets/lei_resume.pdf";
import { Link } from "react-scroll"; // <-- Import Link

const Profile = () => {
  // Handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Lei_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
            I am a Professional HR Specialist & Virtual Assistant
          </h2>
          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
            <p>
              I help business owners stay focused by handling the
              tasks that slow them down from managing schedules and
              coordinating communications to assisting with recruitment
              and documentation. I specialize in providing reliable
              administrative and HR support that keeps operations running smoothly.
            </p>
            <p className="mt-3">
              I take care of the behind-the-scenes work so you can
              stay ahead on the things that matter most.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center gap-4">
            {/* Smooth scroll to Portfolio section */}
            <Link
              to="portfolio"
              smooth={true}
              duration={900}
              offset={-100} // adjust if navbar covers content
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] cursor-pointer"
            >
              My Projects
            </Link>

            {/* CV download */}
            <button
              onClick={handleDownloadCV}
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary text-xs xxs:text-[14px] sm:text-[16px]"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
