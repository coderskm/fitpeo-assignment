
import "./DashItem1.css";
import { DashItemList } from "../../assets/DashItemList";

const DashItem1 = () => {
  return (
    <>
      <div className="list-style">
        {DashItemList.map((item) =>
        <Item
          key={item.id}
          icon={item.icon}
          title={item.title}
          price={item.price}
          classStyle={item.class}
          spanText={item.spanText}
        />
        )}
      </div>
    </>
  );
};

const Item = ({icon, title, price, classStyle, spanText }) => {
  return (
    <>
      <main className="list-container-style">
        <div>
          <img src={icon} alt="dollar" className="image-style" />
        </div>
        <div>
          <div className="title-style">{title}</div>
          <div className="price-style">
            <b>{price}</b>
          </div>
          <div className="tag-style">
            <span className={classStyle === "green" ? "style-stat-green" : "style-stat-red"}>{ spanText}</span> this month
          </div>
        </div>
      </main>
    </>
  );
}
export default DashItem1;
