import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px rgba(50, 50, 50, 0.05);
  padding: 12px;
  margin-bottom: 8%;
  min-width: 190px;
  background-color: white;
  max-width: 280px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: height 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    box-shadow: 0px 2px 2px 2px rgba(150, 150, 150, 0.4);
    cursor: pointer;
  }

  &.expanded {
    z-index: 5;
    height: auto
  }

  @media screen and (max-width: 1600px) {
    max-width: 265px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: fit-content;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;

const CardTitle = styled.p`
  margin-top: 0;
  color: #4b465c;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const CardText = styled.div`
  color: #4b465c;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
`;

const LinkShowMore = styled.span`
  color: #007bff;
  padding-top: 5px;
  cursor: pointer;
  font-weight: bold;
`;

interface DiaryCardProps {
  diary: {
    title: string;
    body: string;
  };
}

const DiaryCard = ({ diary }: DiaryCardProps) => {
  const { title, body } = diary;
  const [showMore, setShowMore] = useState(false);

  const truncatedBody = showMore ? body : body.slice(0, 100) + (body.length > 100 ? "..." : "");

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card className={showMore ? "expanded" : ""} onClick={handleToggleShowMore}>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>
          {truncatedBody}
          {body.length > 100 && (
            <LinkShowMore onClick={handleToggleShowMore}> {showMore ? "Hide" : "Show More"}</LinkShowMore>
          )}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default DiaryCard;
