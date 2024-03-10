import { Link } from "react-router-dom";

type HomePagePropTypes = {
  title: string;
};

const HomePage = ({ title }: HomePagePropTypes) => {
  return (
    <>
      <main>
        <h1>{title}</h1>
        <Link to="/about">About</Link>
      </main>
    </>
  );
};

export default HomePage;
