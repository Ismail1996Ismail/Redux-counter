import { useSelector } from "react-redux";
import Buttons from './Buttons'
function App() {
  const count = useSelector(state => state)
  return (
    <div className="App">
      <h2> {count}</h2>
      <Buttons/>
    </div>
  );
}

export default App;
