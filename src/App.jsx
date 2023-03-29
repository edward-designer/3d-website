import { useRef } from "react";

import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";

function App() {
  const soundDivRef = useRef(null);
  const displayDivRef = useRef(null);
  const webgiViewerRef = useRef(null);
  const contentRef = useRef(null);

  const scrollTo = (ref) => () => {
    const element = ref.current;
    window.scrollTo({
      top:
        ref === soundDivRef
          ? element.getBoundingClientRect().top
          : element.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbotron scrollTo={scrollTo(soundDivRef)} />
        <SoundSection scrollTo={scrollTo(displayDivRef)} ref={soundDivRef} />
        <DisplaySection ref={displayDivRef} triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
