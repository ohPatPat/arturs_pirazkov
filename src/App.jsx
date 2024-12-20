import "./App.scss";
import { Header } from "./comp/header/Header";
import { HeroImg } from "./comp/heroImg/HeroImg";
import { About } from "./comp/about/About";
import { Price } from "./comp/price/Price";
import { Portrait } from "./comp/portrait/Portrait";
import { Gallary } from "./comp/gallary/Gallary";
import { Gift } from "./comp/gift/Gift";
import { Contact } from "./comp/contact/Contact";
import { Footer } from "./comp/footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <HeroImg />
      <div id="Spacing">
        <About />
        <Price />
        <Portrait />
        <Gallary />
        < Gift />
      </div>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
