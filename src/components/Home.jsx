import Banner from "./Banner";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Banner />
      <Blogs/>
    </div>
  );
};

export default Home;
