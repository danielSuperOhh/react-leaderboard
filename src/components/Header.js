import Geniescoreboard from "./Geniescoreboard";
import MVP from "./MVP";
import NavBar from "./Navbar/NavBar";

const Header = () => {
  return (
    <div>
      <NavBar/>
      <div className="designs"></div>
      <div className="header-wrapper">
      <h2 className="famous">
        A Sample Lea<span>rnable Leader-</span>Board App
      </h2>
      </div>
      <MVP />
      <div className="section-famous">
        <h2 className="famous"> Intern<span>'s Catalogue/Score</span> Board
        </h2>
      </div>
      <Geniescoreboard/>
    </div>
  );
};

export default Header;
