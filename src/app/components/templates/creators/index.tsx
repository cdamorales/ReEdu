"use client";
import React, { useState } from "react";
import "./style.css";
import { ParagraphText } from "../../atoms";
import { HouseCardsCreatorsSVG } from "../../atoms/svgs";

const Creators = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const handleExpandClick = (index: number) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const cards = [
    {
      number: "01",
      description: "Lorem Ipsum is simply",
      theme: "purple-theme",
    },
    {
      number: "02",
      description: "Lorem Ipsum is simply",
      theme: "red-theme",
    },
    {
      number: "03",
      description: "Lorem Ipsum is simply",
      theme: "purple-theme",
    },
  ];

  return (
    <div className="d-flex flex-direction-col bg">
      <ParagraphText className="title">{`Creators`}</ParagraphText>
      <div className="gallery">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-gallery ${card.theme} ${
              activeCard === index ? "active" : "inactive"
            }`}
          >
            <div className="card-header">
              <span className="number">{card.number}</span>
              <div className="container-desc">
                <p className="description">{card.description}</p>
                <button
                  className="expand"
                  onClick={() => handleExpandClick(index)}
                >
                  +
                </button>
              </div>
            </div>
            {activeCard === index && (
              <div className="card-body">
                <ParagraphText className="title">
                  {`Imagination Vacation: Clouds`}
                </ParagraphText>
                <ParagraphText className="description">
                  {`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.`}
                </ParagraphText>
                <button className="learn-more">{`Learn More`}</button>
                <HouseCardsCreatorsSVG />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Creators;
