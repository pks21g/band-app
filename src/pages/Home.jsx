import { Banner } from "../components/Banner";
import { Cd } from "../components/Cd";
import Outnow from "../components/Outnow";

const Home = () => {
  return (
    <div>
      {/* <h1>This is home</h1> */}
      <Banner/>
      <Outnow />
      <Cd />
    </div>
  );
};
export default Home;
