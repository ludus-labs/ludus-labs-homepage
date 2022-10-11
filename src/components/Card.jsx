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
                <h5>{data.position},</h5>
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
            <div className="label">Major</div>
            <div className="data">{data.detail}</div>
          </div>
          <div className="line">
            <div className="label">Address</div>
            <div className="data">{data.location}</div>
          </div>
          <div className="line">
            <div className="label">Phone</div>
            <div className="data">{data.tel}</div>
          </div>
          <div className="line">
            <div className="label">Email</div>
            <div className="data">{data.mail}</div>
          </div>
          <div className="line">
            <div className="label">Homepage</div>
            <a className="data" href={data.homepage} target="blank">
              {data.homepage}
            </a>
          </div>
        </div>
        {/* <div className="symbol">
          <img src={`/img/${data.symbol}.png`} alt="symbol" />{" "}
        </div> */}
          {/* <h5 className="commentLine">
          Smart materials based morphogenic regeneration
        </h5> */}
          {/* <h6>{data.description}</h6> */}

          {/* <h6>{findLink(data.description)}</h6> */}
        </div>
      </div>

      <div className="row" style={{ marginTop: "44px" }}>
        <div className="col-lg-5 iconPath">
          <img src={data.iconPath} alt="" />
        </div>
        <div className="col-lg-7">
          <h5 className="cardTop">{data.title}</h5>
          <h6 className="cardBottom">{findLink()}</h6>
        </div>
      </div>
    </div>
  );
}
