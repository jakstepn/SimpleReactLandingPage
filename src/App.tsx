import { ParallaxProvider } from "react-scroll-parallax";
import MainPage from "./main_page/MainPage";
import Navbar from "./main_page/containers/navigation/Navbar";

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <MainPage />
    </ParallaxProvider>
  );
}

export default App;
