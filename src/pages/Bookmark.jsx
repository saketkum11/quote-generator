import "../style/Home.css";
import "../style/Bookmark.css";
import { Link } from "react-router-dom";
import { Card } from "../server";
import { useSelector } from "react-redux";
const Bookmark = () => {
  const {
    quote: { bookmark },
  } = useSelector((state) => state);

  return (
    <div className="bookmark-page">
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
                <Link className="home-page-text active " to="/bookmark">
                  Bookmark
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <Card randomQuote={bookmark} />
        </section>
      </main>
    </div>
  );
};

export { Bookmark };
