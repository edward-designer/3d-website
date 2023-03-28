import { useRef } from "react";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";

function App() {
  const soundDivRef = useRef(null);

  const scrollToSound = () => {
    const element = soundDivRef.current;
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Nav />
      <Jumbotron scrollToSound={scrollToSound} />
      <SoundSection ref={soundDivRef} />
    </div>
  );
}

export default App;
