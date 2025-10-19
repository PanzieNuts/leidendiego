import Roles from "./Roles";
import { Link } from "react-scroll"; // <-- import Link

const rolesData = [
  {
    id: 1,
    title: "Human Resources (HR) Support",
    description:
      "I assist in recruitment, onboarding, and employee management, ensuring smooth HR operations and compliance with organizational policies.",
  },
  {
    id: 2,
    title: "Administrative Assistance",
    description:
      "I provide efficient administrative support, including document management, scheduling, and communication, to streamline day-to-day office tasks.",
  },
  {
    id: 3,
    title: "Virtual Assistance",
    description:
      "I deliver remote support by managing emails, calendars, data entry, and other operational tasks, ensuring productivity and reliability for clients.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in streamlining business operations, 
            managing administrative tasks, and supporting human 
            resource functions to help businesses run more efficiently.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines strong organizational skills with 
            people-centered support, ensuring smooth communication, 
            efficient workflow management, and reliable execution of 
            both day-to-day and strategic tasks.
          </p>
        </div>

        {/* Updated button to redirect to contact */}
        <Link
          to="contact"
          smooth={true}
          duration={900}
          offset={-100} // adjust for navbar if needed
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5 cursor-pointer"
        >
          Say Hello!
        </Link>
      </div>

      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
