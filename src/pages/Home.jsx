import { Banner } from "../components/home/Banner";
import { Cd } from "../components/home/Cd";
import Outnow from "../components/home/Outnow";
import Rest from "../components/home/Rest";
import StorePerv from "../components/home/StorePerv";


const Home = () => {
  return (
    <div>
      {/* <h1>This is home</h1> */}
      <Banner />
      <Outnow />
      <Cd />
      <StorePerv />
      <Rest />
    </div>
  );
};
export default Home;
