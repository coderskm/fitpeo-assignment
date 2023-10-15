import histogram from "../../assets/histogram.png";
import pieChart from "../../assets/pie-chart.png";
import "./DashItem2.css";
const DashItem2 = () => {
  return (
    <div className="styling">
      <main className="parent-1-style">
        <div className="header-style">
          <h2>Overview</h2>
          <select name="" id="" className="dropdown-style">
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
            <option value="quarterly" selected>
              Quarterly
            </option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <section>
          <img src={histogram} alt="histogram" />
        </section>
      </main>
      <main className="parent-2-style">
        <h2 className="heading-style">Customers</h2>
        <p className="para-style">Customers that buy products</p>
        <img src={pieChart} alt="pie-chart" />
      </main>
    </div>
  );
};

export default DashItem2;
