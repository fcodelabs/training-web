import React from "react";
import "./Diarycard.css";
import { useState } from "react";

function Card({ title, subTitle, body, color }) {
  const [readMore, setReadMore] = useState(false);

  // var content = body;
  const extraContent = (
    <div>
      <p className="extra-content"> {body.substring(100, body.length)} </p>{" "}
    </div>
  );

  return (
    <div className="card-container" style={{ backgroundColor: color }}>
      <div className="card-title">
        <h3> {title} </h3>{" "}
      </div>
      <div className="card-subtitle">
        <h5> {subTitle} </h5>
      </div>
      <div className="card-body">
        <p>
          {" "}
          {body.substring(0, 100)} {readMore && extraContent}{" "}
          <a
            className="read-more-link"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {" "}
            <h2> {readMore ? "Read Less << " : "Read More"} </h2>
          </a>{" "}
        </p>
        {/* {readMore && extraContent} */}{" "}
      </div>
    </div>
  );
}

export default Card;
