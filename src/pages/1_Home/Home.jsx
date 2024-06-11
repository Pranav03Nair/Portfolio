import Intro from "./Intro";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Intro />
      </div>
    </>
  );
};
export default Home;
