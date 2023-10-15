import "./DashItems.css"
import { Search } from "../../icons";
import DashItem1 from "./DashItem1";
import DashItem2 from "./DashItem2";
import DashItem3 from "./DashItem3";
const DashItems = () => {
  return (
    <>
      <section className="dashitem-top-style">
        <div className="greet-style">Hello Shahrukh 👋,</div>

        <div className="input-box-style">
          <div className="search-icon-style">
            <Search />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </section>
      <DashItem1 />
      <DashItem2 />
      <DashItem3 />
    </>
  );
}

export default DashItems