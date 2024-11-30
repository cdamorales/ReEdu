import React from "react";
import { Carousel } from "antd";
import "./style.css";
import { CardLearnerProps } from "../../types";
import { CardLearner } from "../../molecules";

const learnersList: CardLearnerProps[] = [
  {
    avatar: "chef",
    img: "/assets/img/person1.svg",
    text: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.`,
    name: "Regan Lynch",
    relationship: "Parent",
  },
  {
    avatar: "student",
    img: "/assets/img/person2.svg",
    text: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.`,
    name: "Lauren L. | Third-grader",
    relationship: "Kid",
  },
  {
    avatar: "chef",
    img: "/assets/img/person1.svg",
    text: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.`,
    name: "Regan Lynch",
    relationship: "Parent",
  },
  {
    avatar: "student",
    img: "/assets/img/person2.svg",
    text: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.`,
    name: "Lauren L. | Third-grader",
    relationship: "Kid",
  },
  {
    avatar: "chef",
    img: "/assets/img/person1.svg",
    text: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.`,
    name: "Regan Lynch",
    relationship: "Parent",
  },
  {
    avatar: "student",
    img: "/assets/img/person2.svg",
    text: `Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.`,
    name: "Lauren L. | Third-grader",
    relationship: "Kid",
  },
];

const chunkArray = (array: CardLearnerProps[], size: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};
const groupedLearners = chunkArray(learnersList, 2);
const Learners: React.FC = () => (
  <div className="d-flex flex-direction-col container-learners bg">
    <span className="title">Learners</span>
    <div className="carousel-learners">
      <div className="carousel">
        <Carousel arrows infinite={false}>
          {groupedLearners.map((group, index) => (
            <div className="card-item-learner" key={index}>
              {group.map((item) => (
                <CardLearner
                  key={item.name}
                  name={item.name}
                  avatar={item.avatar}
                  img={item.img}
                  relationship={item.relationship}
                  text={item.text}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);

export default Learners;
