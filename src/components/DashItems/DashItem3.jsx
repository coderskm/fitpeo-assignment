import "./DashItem3.css";
import { Search } from "../../icons";
const DashItem3 = () => {
  return (
    <main className="parent-style">
      <section className="header-style">
        <div>
          <h2>Product Sell</h2>
        </div>
        <div className="input-1-style">
          <div className="search-style">
            <Search />
          </div>
          <input type="text" className="input-style" placeholder="Search"/>
        </div>
        <div>
          <select name="productsell" id="productsell" className="dropdown-style">
            <option value="last30" selected>
              Last 30 days
            </option>
            <option value="last30">Last 10 days</option>
            <option value="last30">Last 1 week</option>
          </select>
        </div>
      </section>
    </main>
  );
};

export default DashItem3;
