import Illustration1 from "/Illustration1.svg";

const Intro = () => {
  return (
    <div className="flex h-full flex-col bg-background lg:flex-row">
      <div className="flex flex-col justify-center bg-secondary p-10 lg:px-12">
        {/* Designation */}
        <div className="mb-8 text-lg font-bold text-accent">
          Fresher Developer & Designer
        </div>
        {/* Intro */}
        <div className="mb-8 text-justify text-5xl font-extrabold leading-tight text-primary md:text-6xl">
          A Fresher on a journey to become a Full Stack DEV
        </div>
        {/* Something about yourself - Goal, Flex, Experience */}
        <div className="text-justify text-lg leading-relaxed text-text md:text-xl">
          I am <span className="font-bold text-accent">Pranav</span>. Proficient
          in several programming languages, I thrive on challenges and
          collaboration to craft impactful solutions. My aspiration is to create
          groundbreaking projects that redefine our world.
        </div>
      </div>
      <div className="flex justify-center bg-background p-6 lg:flex lg:items-center">
        <img
          src={Illustration1}
          alt="Illustration"
          className="h-auto w-80 lg:w-auto"
        />
      </div>
    </div>
  );
};

export default Intro;
