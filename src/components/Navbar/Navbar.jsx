import { Dashboard } from "../../icons";
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
      <div></div>
    </section>
  );
}

export default Navbar;