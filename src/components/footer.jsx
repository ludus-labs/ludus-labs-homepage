import React from "react";
import "../style/main.scss";
export default function Footer() {
  const data = [
    "Copyright 2022 Biomedical Engineering Class, COLLEGE OF MEDICINE, KOREA UNIVERSITY",
    "All Rights Reserved",
    "Tel.. 02-2286-1125",
  ];
  return (
    <div className="footer">
      <p>
        {data.map((e, i) => (
          <span>
            {e}
            {i == data.length - 1 ? null : <span className="contour">|</span>}
          </span>
        ))}
      </p>
    </div>
  );
}
