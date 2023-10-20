import React from "react";
import { Home2 } from "./Home2.jsx";
import { Setting2 } from "./Setting2";
import "./style.css";

interface Props {
  className: any;
}

export const Aside = ({ className }: Props): JSX.Element => {
  return (
    <div className={`aside ${className}`}>
      <div className="logo">
        <img className="image" alt="Image" src="/assets/wallet.svg" />
      </div>
      <div className="frame">
        <div className="li-item">
          <Home2 className="icon-instance-node" />
        </div>
        <div className="nav">
          <div className="li-item">
            <Setting2 className="icon-instance-node" />
          </div>
        </div>
      </div>
    </div>
  );
};
