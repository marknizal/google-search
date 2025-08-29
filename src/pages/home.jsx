import { Main } from "../components/shared";

import Google from "../container";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

const Home = () => {
  return (
    <Main>
      <Header />
      <Google />
      <Footer />
    </Main>
  );
};

export default Home;
