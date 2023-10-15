import { ChevronDown, Dashboard } from "../../icons";
import man from "../../assets/man.png";
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
         <div>Dashboard</div> 
        <div>Product</div>
        <div>Customers</div>
        <div>Income</div>
        <div>Promote</div>
        <div>Help</div>
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
