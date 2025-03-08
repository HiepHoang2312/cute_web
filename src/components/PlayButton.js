import React from "react";

const PlayButton = React.forwardRef((props, ref) => {
  return (
    <div className="play-icon" {...props} ref={ref}>
      <div className="toggle-cont">
        <input
          className="toggle-input"
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={props?.checked}
        />
        <label className="toggle-label" htmlFor="toggle">
          <div className="cont-label-play">
            <span className="label-play"></span>
          </div>
        </label>
      </div>
    </div>
  );
});

export default PlayButton;
