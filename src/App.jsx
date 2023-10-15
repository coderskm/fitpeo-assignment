import DashItems from "./components/DashItems/DashItems";
import Navbar from "./components/Navbar/Navbar";

import "./App.css"
const App = () => {
  return (
    
      <div className="display-component-style">
        <div>
          <Navbar />
        </div>
        <div className="dashitems-component-style">
          <DashItems />
        </div>
      </div>
    
  );
}

export default App