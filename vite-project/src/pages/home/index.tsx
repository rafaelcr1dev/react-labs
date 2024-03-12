import { Link } from "react-router-dom";

type HomePagePropTypes = {
  title: string;
};

const HomePage = ({ title }: HomePagePropTypes) => {
  return (
    <>
      <main>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {title}
        </h1>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <Link to="/cart">REACT: PASAJE DE PROPIEDADES</Link>
          </li>
          <li>
            <Link to="/caching">Caching</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default HomePage;
