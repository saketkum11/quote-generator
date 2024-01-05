import { Link } from "react-router-dom";
import "../style/Home.css";
import { Card } from "../server";
import { DropDown } from "../component/DropDown";
const Home = () => {
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
          <Card />
        </section>
        <section>
          <DropDown />
        </section>
      </main>
    </div>
  );
};

export { Home };
