import { DiscountBanner } from "./components/DiscountBanner/DiscountBanner";
import { Header } from "./components/Header/Header";
import { Payment } from "./components/Payment/Payment";
import { SliderCarousel } from "./components/Slider/Slider";
import bannergame01 from "./assets/img/bannergame01.jpg";
import bannergame02 from "./assets/img/bannergame02.jpg";
import { Category } from "./components/Category/Category";
function App() {
  return (
    <div className="App">
      <Header />
      <SliderCarousel />
      <Payment />
      <DiscountBanner img={{ bannergame01, bannergame02 }} />
      <Category />
    </div>
  );
}

export default App;
