import { Header } from "./components/Header/Header";
import { Payment } from "./components/Payment/Payment";
import { SliderCarousel } from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <SliderCarousel />
      <Payment />
    </div>
  );
}

export default App;
