import { useSession } from "next-auth/react";

import PageHeader from "../components/PageHeader";
import Article from "../components/Article";
import LoginBanner from "../components/LoginBanner";

const Home = () => {
  const { status } = useSession();

  return (
    <div>
      <PageHeader />
      {status === "authenticated" ? <Article /> : <LoginBanner />}
    </div>
  );
};

export default Home;