import "./app.scss"
import Test from "./components/Test";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
    </section>
    <section id="Services">Parallex</section>
    <section>Services</section>
    <section id="Portfolio">Parallex</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Kontakt">Kontakt</section>
    {/* <Test /> */}
  </div>;
};

export default App;
