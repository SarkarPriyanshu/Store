import React from "react";
import { withRouter } from "react-router-dom";

const Menuitem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <>
      <div
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        className={`${size} menu-item`}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
};

export default withRouter(Menuitem);
