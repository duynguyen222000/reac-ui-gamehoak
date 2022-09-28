import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { FeaturePage } from "./pages/Featurepage/FeaturePage";
import { Homepage } from "./pages/HomePage/Homepage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MediaPage } from "./pages/MediaPage/MediaPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ShopPage } from "./pages/ShopPage/ShopPage";
import { ShortCodePage } from "./pages/ShortCodePage/ShortCodePage";
import { HomeTemplate } from "./theme/HomeTemplate/HomeTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Homepage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="media" element={<MediaPage />} />
            <Route path="shortcode" element={<ShortCodePage />} />
            <Route path="feature" element={<FeaturePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
