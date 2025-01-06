import React from "react";
import "./cardDisplay.css";

type CardDisplayProps = {
  children: React.ReactNode;
};

export const CardDisplay = (props: CardDisplayProps) => {
  return (
    <div className="container">
      <div className="gradient shape1"></div>
      <div className="gradient shape2"></div>

      <div className="card">{props.children}</div>
    </div>
  );
};
