import React, { useEffect } from "react";
import "../style/card.scss";
export default function Card({ data }) {
  const findLink = () => {
    if (data.description) {
      const words = data.description.split(" ");
      return (
        <>
          {words.map((word) =>
            word.includes("http") ? (
              <a
                style={{ textDecoration: "underline", color: "inherit" }}
                href={word}
                target="_blank"
              >
                <strong>{word}</strong>
              </a>
            ) : word.includes("www") ? (
              <a
                style={{ textDecoration: "underline", color: "inherit" }}
                href={`https://${word}`}
                target="_blank"
              >
                <strong>{word}</strong>
              </a>
            ) : (
              <span>{word + " "}</span>
            )
          )}
        </>
      );
    }
  };
  findLink();
  return (
    <div className="Cardcontainer">
      <div className="row upperContent">
        <div className="cardBox col-lg-3 col-md-4">
          <div className="row" style={{ width: "100%", gap: "0px" }}>
            <div>
              <div className="imgBox">
                <img width={"100%"} src={data.thumbnail} alt="김승종 교수님" />
              </div>
            </div>
          </div>
        </div>

        <div className="commentBox cardBox col-lg-9 col-md-8">
          <div className="list">
            <div className="intro">
              <div className="redBar"></div>
              <div>
                <h5>{data.position}</h5>
                <h4>{data.name}</h4>
              </div>
            </div>
            <div className="line">
              <div className="label">Department</div>
              <div className="data">{data.belong}</div>
            </div>
            <div className="line">
              <div className="label">Position</div>
              <div className="data">{data.position}</div>
            </div>
            <div className="line">
              <div className="label">Email</div>
              <div className="data">{data.mail}</div>
            </div>
            {data.github && (
              <div className="line">
                <div className="label">Github</div>
                <a className="data" href={data.github} target="blank">
                  {data.github}
                </a>
              </div>
            )}
            <div className="line">
              <div className="label">Comment</div>
              <div className="data">{data.title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
