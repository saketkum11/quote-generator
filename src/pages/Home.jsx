import { Link } from "react-router-dom";
import "../style/Home.css";
import { Card } from "../server";
import { DropDown } from "../component/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTags, randomQuote } from "../slice/quoteSlice";
const Home = () => {
  const {
    quote: { randomQuotes, tags },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomQuote());
    dispatch(getTags());
  }, [dispatch]);
  const handleClick = () => {
    dispatch(randomQuote());
  };

  return (
    <div className="home-page">
      <header>
        <div className="home-page-header-container ">
          <nav className="home-page-nav ">
            <div className="home-page-navigate ">
              <div>
                <Link className="home-page-text home-page-text-bold" to="/">
                  Home
                </Link>
              </div>
              <div>
                <Link className="home-page-text " to="/bookmark">
                  Bookmark
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <Card randomQuote={randomQuotes} />
        </section>
        <section>
          <DropDown tags={tags} />
        </section>
        <section className="home-page-button-section">
          <button
            className="home-page-next-button"
            onClick={() => handleClick()}
          >
            Next Quote
          </button>
        </section>
      </main>
    </div>
  );
};

export { Home };
