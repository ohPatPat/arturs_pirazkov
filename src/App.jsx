import "./App.scss";
import { Header } from "./comp/header/Header";
import { HeroImg } from "./comp/heroImg/HeroImg";
import { About } from "./comp/about/About";
import { Price } from "./comp/price/Price";
import { Gallary } from "./comp/gallary/Gallary";
import { Contact } from "./comp/contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <HeroImg />
      <div id="Spacing">
        <About />
        <Price />
        <Gallary />
      </div>
        <Contact />
    </div>
  );
}

export default App;
