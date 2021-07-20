import "./App.css";
import "antd/dist/antd.css";
import { ListRides } from "./components/listRides";
import { Title } from "./components/title";
function App() {
  return (
    <div className="App">
      <Title />
      <ListRides />
    </div>
  );
}

export default App;
