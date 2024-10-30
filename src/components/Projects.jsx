import React, { useState } from "react";
import Card from "./Card";

function Projects() {
  const projectsList = [
    {
      title: "test1 title",
      image: "test1.jpg",
      detail: "description",
      start: "2024.10.12",
      end: "2024.10.13",
      tech: ["HTML5", "CSS3"],
      work: ["HTML 마크업", "CSS 스타일링"],
      demo: "#projects",
      source: "",
    },
    {
      title: "test2 title",
      image: "test2.jpg",
      detail: "description2",
      start: "2024.10.12",
      end: "2024.10.13",
      tech: ["HTML5", "CSS3"],
      work: ["HTML 마크업", "CSS 스타일링"],
      demo: "",
      source: "",
    },
    {
      title: "test3 title",
      image: "test3.jpg",
      detail: "description3",
      start: "2024.10.12",
      end: "2024.10.13",
      tech: ["HTML5", "CSS3"],
      work: ["HTML 마크업", "CSS 스타일링"],
      demo: "",
      source: "",
    },
    {
      title: "test4 title",
      image: "test4.jpg",
      detail: "description4",
      start: "2024.10.12",
      end: "2024.10.13",
      tech: ["HTML5", "CSS3"],
      work: ["HTML 마크업", "CSS 스타일링"],
      demo: "",
      source: "",
    },
  ];

  const [flipAll, setFlipAll] = useState(false);
  const [flip, setFlip] = useState(-1);
  const cardFlip = (n) => {
    if (flip !== -1) {
      setFlip(-1);
    } else {
      setFlip(n);
    }
  };

  return (
    <section id="Projects">
      <h2>Projects</h2>
      <div className="flipBtn">
        <button
          className="filp-all"
          onClick={() => {
            setFlipAll(!flipAll);
          }}
        >
          {!flipAll ? <span>Flip All &gt;</span> : <span>Reset &gt;</span>}
        </button>
      </div>
      <div className="projects-grid">
        {projectsList.map((ele, idx) => {
          return (
            <div
              key={`proj-${idx}`}
              className={flip === idx || flipAll ? "flip active" : "flip"}
              onClick={() => {
                cardFlip(idx);
              }}
            >
              <Card proj={ele} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
