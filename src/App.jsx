import gsap, { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-black h-dvh"></div>
    </main>
  );
}

export default App;
