import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DiaryCard.css";

interface DiaryCardProps {
  diary: {
    title: string;
    body: string;
  };
}

const DiaryCard = ({ diary }: DiaryCardProps) => {
  const { title, body } = diary;
  const [showMore, setShowMore] = useState(false);

  const truncatedBody = showMore ? body : body.slice(0, 100)+(body.length > 100 ? "..." : "");

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`card ${showMore ? "expanded" : ""}`} onClick={handleToggleShowMore}>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <div className="card-text">
          {truncatedBody}
          {body.length > 100 && (
            <span onClick={handleToggleShowMore} className="link-show-more">
              {showMore ? "Hide" : "Show More"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiaryCard;

