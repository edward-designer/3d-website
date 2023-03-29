import { forwardRef } from "react";

const DisplaySection = forwardRef(function DisplaySection(props, ref) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="display-section wrapper" ref={ref}>
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display that's up to 2x brigther in the sun.
      </span>
      <ul className="links">
        <li>
          <button className="button" type="button">
            Try me!
          </button>
        </li>
        <li>
          <button className="back-button" type="button" onClick={scrollToTop}>
            TOP
          </button>
        </li>
      </ul>
    </div>
  );
});

export default DisplaySection;
