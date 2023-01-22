import Slider from "./Slider";
import { slidesData } from "./slidesData";
function App() {
  return (
    <div className="App">
      <Slider slides={slidesData} />
    </div>
  );
}

export default App;
