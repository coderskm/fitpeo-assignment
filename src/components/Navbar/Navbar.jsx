import { ChevronDown, Dashboard, ChevronRight } from "../../icons";
import man from "../../assets/man.png";
import { Navbarlist } from "../../assets/NavbarList";
import "./Navbar.css";
const Navbar = () => {
  return (
    <section className="navbar-style">
      <div className="dash-style">
        <div className="dash-icon-style">
          <Dashboard />
        </div>
        <h3>Dashboard</h3>
      </div>

      <nav>
        {Navbarlist.map((item) => (
          <div
            key={item.id}
            className={item.name === "Dashboard" ? "dashboard-navitem-style" : "navitem-style"}
          >
            <div>{item.name}</div>
            <div className="chevronright-style">
              <ChevronRight />
            </div>
          </div>
        ))}
      </nav>
      <div className="profile-style">
        <img src={man} alt="man" />
        <div className="profile-info">
          <p>Evano</p>
          <p className="designation">Project Manager</p>
        </div>
        <div className="chevrondown-style">
          <ChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
