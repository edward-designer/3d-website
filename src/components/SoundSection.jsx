import { forwardRef } from "react";

const SoundSection = forwardRef(({ scrollTo }, ref) => {
  return (
    <div className="sound-section wrapper" ref={ref}>
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel the base.</p>
          <span className="description">
            From $41.62/mo. for 24 mo. or $999 before trade-in
          </span>
          <ul className="links">
            <li>
              <button className="button" type="button">
                Buy
              </button>
            </li>
            <li>
              <a className="link" onClick={scrollTo}>
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default SoundSection;
